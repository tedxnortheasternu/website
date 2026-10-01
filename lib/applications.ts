/**
 * Application entry points.
 *
 * Team applications are gated in Sanity: a position is listed and applyable
 * only while its `acceptingApplications` boolean is on, and `/apply` shows the
 * closed notice when no position has it. There is deliberately no code-level
 * team switch — opening or closing a cycle is a Studio action, not a deploy.
 *
 * Speaker applications have no Sanity representation (they are tied to a single
 * flagship event), so they stay hardcoded here. Typed as `boolean` rather than
 * the inferred `false` literal so both branches keep type-checking in either
 * state.
 *
 * When reopening either, confirm the URL below still points at the current form
 * — Airtable share links change whenever a form is duplicated for a new cycle.
 */
export const SPEAKER_APPLICATIONS_OPEN: boolean = false

export const TEAM_APPLICATION_URL =
  'https://airtable.com/appaQrU3UQvRIleJT/shr67F3NWrxOUSiw6'
export const SPEAKER_APPLICATION_URL =
  'https://airtable.com/appfmGmk4yM44WDKh/shrqqY5VGETe2x7tk'
