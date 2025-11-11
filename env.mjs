import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    // Sanity config (optional at runtime; validated when used)
    SANITY_PROJECT_ID: z.string().optional(),
    SANITY_DATASET: z.string().optional(),
    SANITY_API_VERSION: z.string().optional(),
    SANITY_READ_TOKEN: z.string().optional(),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_API_VERSION: process.env.SANITY_API_VERSION,
    SANITY_READ_TOKEN: process.env.SANITY_READ_TOKEN,
  },
})
