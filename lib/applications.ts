/**
 * Application kill switch.
 *
 * Applications are hardcoded off between cycles. To reopen, flip the relevant
 * flag to `true` and confirm the URL below still points at the current form —
 * Airtable share links change whenever a form is duplicated for a new cycle.
 *
 * Typed as `boolean` rather than the inferred `false` literal so both branches
 * keep type-checking in either state.
 */
export const TEAM_APPLICATIONS_OPEN: boolean = false
export const SPEAKER_APPLICATIONS_OPEN: boolean = false

export const TEAM_APPLICATION_URL =
  'https://airtable.com/appaQrU3UQvRIleJT/shr67F3NWrxOUSiw6'
export const SPEAKER_APPLICATION_URL =
  'https://airtable.com/appfmGmk4yM44WDKh/shrqqY5VGETe2x7tk'
