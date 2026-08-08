import { afterEach, describe, expect, it, vi } from 'vitest'

import { resolveHref } from '@/sanity/lib/utils'

describe('resolveHref', () => {
  describe('with a slug', () => {
    it.each([
      ['page', 'about-us', '/about-us'],
      ['event', 'uncharted', '/events/uncharted'],
      ['position', 'tech-lead', '/apply/tech-lead'],
      ['team', 'finance', '/teams/finance'],
      ['pastevents', 'renaissance', '/pastevents/renaissance'],
    ])('maps %s + slug to %s', (documentType, slug, expected) => {
      expect(resolveHref(documentType, slug)).toBe(expected)
    })
  })

  describe('without a slug', () => {
    it.each([
      ['page', '/'],
      ['event', '/events'],
      ['position', '/apply'],
      ['team', '/teams'],
      ['pastevents', '/pastevents'],
    ])('falls back to the %s listing page, %s', (documentType, expected) => {
      expect(resolveHref(documentType)).toBe(expected)
    })

    // The implementation uses `slug ? ... : ...`, so an empty string is falsy
    // and takes the same branch as a missing slug.
    it.each([
      ['page', '/'],
      ['event', '/events'],
      ['position', '/apply'],
      ['team', '/teams'],
      ['pastevents', '/pastevents'],
    ])('treats an empty %s slug as absent, %s', (documentType, expected) => {
      expect(resolveHref(documentType, '')).toBe(expected)
    })
  })

  describe('home', () => {
    it('resolves to the site root', () => {
      expect(resolveHref('home')).toBe('/')
    })

    it('ignores a slug if one is passed', () => {
      expect(resolveHref('home', 'ignored')).toBe('/')
    })
  })

  describe('unrecognized document types', () => {
    afterEach(() => {
      vi.restoreAllMocks()
    })

    it.each([
      ['an unknown type', 'not-a-real-type'],
      ['undefined', undefined],
      ['an empty string', ''],
    ])('returns the no-op href for %s', (_label, documentType) => {
      vi.spyOn(console, 'warn').mockImplementation(() => {})

      expect(resolveHref(documentType)).toBe('#')
    })

    it('warns so the bad document type is visible', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

      resolveHref('not-a-real-type')

      expect(warn).toHaveBeenCalledWith('Invalid document type:', 'not-a-real-type')
    })
  })
})
