import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { describe, expect, it } from 'vitest'

const repoRoot = fileURLToPath(new URL('../', import.meta.url))
const appDir = path.join(repoRoot, 'app')

/** Directories whose source files are scanned for hardcoded links. */
const SCANNED_DIRS = ['app', 'components']

/**
 * Route groups like `(frontend)` are organisational only — they never appear in
 * the URL. Dynamic segments are matched as wildcards.
 */
function filePathToRoute(absoluteFile: string): string {
  const relative = path.relative(appDir, absoluteFile)
  const segments = path
    .dirname(relative)
    .split(path.sep)
    .filter((segment) => segment !== '.' && !/^\(.*\)$/.test(segment))

  return '/' + segments.join('/')
}

function walk(dir: string, match: (file: string) => boolean): string[] {
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full, match)
    return match(entry.name) ? [full] : []
  })
}

/** Every route the app actually serves, as regexes. */
function buildRouteMatchers(): RegExp[] {
  const routeFiles = walk(appDir, (name) =>
    ['page.tsx', 'route.ts'].includes(name),
  )

  return (
    routeFiles
      .map(filePathToRoute)
      /**
       * The root `/[slug]` catch-all matches every single-segment path, which
       * would defeat this whole test. Hardcoded links should point at an
       * explicit route or redirect; CMS-driven links are built at runtime by
       * resolveHref() and never appear as literal strings here.
       */
      .filter((route) => route !== '/[slug]')
      .map((route) => {
        const pattern = route
          .split('/')
          .map((segment) => {
            if (/^\[\[\.\.\..+\]\]$/.test(segment)) return '(?:/.*)?' // optional catch-all
            if (/^\[\.\.\..+\]$/.test(segment)) return '/.+' // catch-all
            if (/^\[.+\]$/.test(segment)) return '/[^/]+' // dynamic segment
            return segment ? `/${segment}` : ''
          })
          .join('')

        return new RegExp(`^${pattern || '/'}$`)
      })
  )
}

/** Redirect sources are valid destinations even without a matching route. */
async function buildRedirectSources(): Promise<string[]> {
  const config = await import('../next.config.mjs')
  const redirects = (await config.default.redirects?.()) ?? []
  return redirects.map((redirect: { source: string }) => redirect.source)
}

/**
 * Strips comments so commented-out markup is not reported. Without this, the
 * repo's many disabled JSX blocks produce false failures — there are a dozen
 * commented-out `<Link>` elements pointing at retired event pages.
 */
function stripComments(source: string): string {
  return source
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '') // JSX comments
    .replace(/\/\*[\s\S]*?\*\//g, '') // block comments
    .replace(/^\s*\/\/.*$/gm, '') // line comments
}

type Link = { file: string; line: number; href: string }

function collectInternalLinks(): Link[] {
  const sourceFiles = SCANNED_DIRS.flatMap((dir) =>
    walk(path.join(repoRoot, dir), (name) => /\.tsx?$/.test(name)),
  ).filter((file) => !file.endsWith('.test.ts') && !file.endsWith('.test.tsx'))

  const patterns = [/href="([^"]+)"/g, /redirect\(\s*['"]([^'"]+)['"]\s*\)/g]
  const links: Link[] = []

  for (const file of sourceFiles) {
    const source = stripComments(fs.readFileSync(file, 'utf8'))

    for (const pattern of patterns) {
      for (const match of source.matchAll(pattern)) {
        const href = match[1]
        if (!href.startsWith('/')) continue // external, mailto:, tel:, #anchor

        links.push({
          file: path.relative(repoRoot, file),
          line: source.slice(0, match.index).split('\n').length,
          href,
        })
      }
    }
  }

  return links
}

describe('internal links', () => {
  it('all point at a route that exists', async () => {
    const matchers = buildRouteMatchers()
    const redirectSources = await buildRedirectSources()
    const links = collectInternalLinks()

    // Guard against the collectors silently returning nothing, which would
    // make this test pass for the wrong reason.
    expect(matchers.length).toBeGreaterThan(0)
    expect(links.length).toBeGreaterThan(0)

    const broken = links.filter(({ href }) => {
      const pathname = href.split(/[?#]/)[0].replace(/\/$/, '') || '/'
      if (redirectSources.includes(pathname)) return false
      return !matchers.some((matcher) => matcher.test(pathname))
    })

    const report = broken
      .map(({ file, line, href }) => `  ${file}:${line} -> ${href}`)
      .join('\n')

    expect(broken, `Links pointing at routes that do not exist:\n${report}`).toEqual([])
  })
})
