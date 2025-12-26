import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    // Sanity config (optional at runtime; validated when used
    SANITY_PROJECT_ID: z.string().optional(),
    SANITY_DATASET: z.string().optional(),
    SANITY_API_VERSION: z.string().optional(),
    SANITY_READ_TOKEN: z.string().optional(),
    SENDGRID_API_KEY: z.string().min(1),
    SENDGRID_FROM_EMAIL: z.string().email(),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_API_VERSION: process.env.SANITY_API_VERSION,
    SANITY_READ_TOKEN: process.env.SANITY_READ_TOKEN,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_FROM_EMAIL: process.env.SENDGRID_FROM_EMAIL,
  },
})
