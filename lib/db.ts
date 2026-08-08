import { neon, neonConfig } from "@neondatabase/serverless";
import dns from "node:dns";

// Tell Node.js to use verbatim DNS resolution
if (typeof dns.setDefaultResultOrder === "function") {
  dns.setDefaultResultOrder("verbatim");
}

// Enable HTTP fetch for serverless database queries (prevents TCP socket connection timeouts)
neonConfig.poolQueryViaFetch = true;

// Use pooled database connection string first for PgBouncer connection reuse
const dbUrl = process.env.DATABASE_URL || process.env.DATABASE_URL_UNPOOLED;

if (!dbUrl) {
  throw new Error("DATABASE_URL environment variable is missing");
}

const rawSql = neon(dbUrl);

// Robust wrapper with automatic retry fallback for network hiccups / ETIMEDOUT
const executeSql = async (strings: any, ...values: any[]): Promise<any> => {
  try {
    return await (rawSql as any)(strings, ...values);
  } catch (error: any) {
    const isTimeout =
      error?.message?.includes("ETIMEDOUT") ||
      error?.message?.includes("fetch failed") ||
      error?.code === "ETIMEDOUT";

    if (isTimeout) {
      console.warn("Neon DB connection hiccup detected, retrying query automatically...");
      await new Promise((res) => setTimeout(res, 150));
      return await (rawSql as any)(strings, ...values);
    }
    throw error;
  }
};

export const sql = executeSql as unknown as typeof rawSql;
