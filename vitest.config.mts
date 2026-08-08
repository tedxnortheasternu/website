import { fileURLToPath } from 'url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    // Mirrors the `@/*` -> `./*` alias in tsconfig.json
    alias: { '@': fileURLToPath(new URL('./', import.meta.url)) },
  },
  test: {
    environment: 'node',
    // sanity/lib/api.ts throws at import time when these are unset, so stub them.
    // Keeps `npm test` from ever needing real Sanity credentials.
    env: {
      NEXT_PUBLIC_SANITY_DATASET: 'test',
      NEXT_PUBLIC_SANITY_PROJECT_ID: 'test',
    },
  },
})
