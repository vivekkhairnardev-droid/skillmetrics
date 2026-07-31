import { createAuthClient } from "@neondatabase/auth";

export const authClient = createAuthClient(
  process.env.NEXT_PUBLIC_NEON_AUTH_BASE_URL || "https://ep-flat-snow-ay1g4oyw.neonauth.c-5.us-east-2.aws.neon.tech/neondb/auth"
);
