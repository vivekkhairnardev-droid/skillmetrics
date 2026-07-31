import { neon, neonConfig } from "@neondatabase/serverless";
import fs from "fs";
import path from "path";

// Force the driver to use HTTP fetch
neonConfig.poolQueryViaFetch = true;

// Read .env.local manually to get DATABASE_URL
const envPath = path.resolve(".env.local");
let databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl && fs.existsSync(envPath)) {
  const envFileContent = fs.readFileSync(envPath, "utf-8");
  const match = envFileContent.match(/DATABASE_URL=["']?([^"'\s]+)["']?/);
  if (match) {
    databaseUrl = match[1];
  }
}

if (!databaseUrl) {
  console.error("DATABASE_URL not found in environment or .env.local");
  process.exit(1);
}

const sql = neon(databaseUrl);

async function run() {
  console.log("Running migration to add SEO columns...");
  try {
    // Add columns
    await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS seo_keywords TEXT;`;
    await sql`ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS seo_keywords TEXT;`;
    await sql`ALTER TABLE resources ADD COLUMN IF NOT EXISTS seo_keywords TEXT;`;
    
    console.log("✓ Successfully added 'seo_keywords' columns to posts, case_studies, and resources tables.");
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

run();
