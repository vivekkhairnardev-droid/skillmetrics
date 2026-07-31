import { neon, neonConfig } from "@neondatabase/serverless";
import dns from "node:dns";

// Tell Node.js to resolve IPv4 addresses before IPv6 globally.
// This resolves the connection ETIMEDOUT (fetch failed) errors on systems with misconfigured local network IPv6 routing.
if (typeof dns.setDefaultResultOrder === "function") {
  dns.setDefaultResultOrder("ipv4first");
}

// Force the driver to use HTTP fetch instead of WebSockets/TCP in serverless environment
neonConfig.poolQueryViaFetch = true;

const dbUrl = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("DATABASE_URL environment variable is missing");
}

export const sql = neon(dbUrl);
