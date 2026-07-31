import { neon, neonConfig } from "@neondatabase/serverless";
import dns from "node:dns";

// Tell Node.js to resolve IPv6/IPv4 addresses natively using the system default (verbatim).
// On this system, forcing ipv4first causes database connection timeouts.
if (typeof dns.setDefaultResultOrder === "function") {
  dns.setDefaultResultOrder("verbatim");
}

// Force the driver to use HTTP fetch instead of WebSockets/TCP in serverless environment
neonConfig.poolQueryViaFetch = false;

const dbUrl = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("DATABASE_URL environment variable is missing");
}

export const sql = neon(dbUrl);
