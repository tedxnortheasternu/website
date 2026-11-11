import fs from 'fs'
import { fileURLToPath } from 'url'
import { describe, expect, it } from 'vitest'

import { membersPageQuery } from '@/sanity/lib/queries'
import member from '@/sanity/schemas/documents/member'
import type { MemberPayload } from '@/types'

const read = (relative: string) =>
  fs.readFileSync(fileURLToPath(new URL(`../${relative}`, import.meta.url)), 'utf8')

// Mock data: one member with a LinkedIn URL, one without (the field is optional).
const withLinkedin: MemberPayload = {
  name: 'Jay Sella',
  linkedin: 'https://www.linkedin.com/in/jay-sella',
} as MemberPayload
const withoutLinkedin: MemberPayload = { name: 'B Two' } as MemberPayload

describe('member linkedin field', () => {
  const field = member.fields.find((f) => f.name === 'linkedin')

  it('is an optional url field placed after hometown', () => {
    const names = member.fields.map((f) => f.name)
    expect(field?.type).toBe('url')
    expect(names.indexOf('linkedin')).toBe(names.indexOf('hometown') + 1)
  })

  it('restricts the url scheme to http and https', () => {
    const calls: unknown[] = []
    const rule = { uri: (opts: unknown) => (calls.push(opts), rule) }
    const validation = field?.validation as ((r: unknown) => unknown) | undefined
    validation?.(rule)
    expect(calls).toEqual([{ scheme: ['http', 'https'] }])
  })

  it('is projected by membersPageQuery', () => {
    expect(membersPageQuery).toMatch(/^\s*linkedin,$/m)
  })

  it('accepts members with and without a value', () => {
    expect(withLinkedin.linkedin).toMatch(/^https:\/\//)
    expect(withoutLinkedin.linkedin).toBeUndefined()
  })
})

describe('member card source', () => {
  // vitest here does not compile JSX (tsconfig has jsx: preserve), so the card
  // is checked at source level for the acceptance-criteria attributes.
  const card = read('components/pages/members/MembersListItem.tsx')

  it('only renders the link when linkedin is set', () => {
    expect(card).toMatch(/member\.linkedin \? \(/)
  })

  it('has accessible name, safe new-tab link and focus ring', () => {
    expect(card).toContain('aria-label={`${member.name} on LinkedIn`}')
    expect(card).toContain('target="_blank"')
    expect(card).toContain('rel="noopener noreferrer"')
    expect(card).toContain('focus:ring-2')
    expect(card).toContain('focus:ring-offset-2')
  })
})
