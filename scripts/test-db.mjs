import { sql } from "../lib/db.ts";

async function test() {
  try {
    console.log("Executing test query via lib/db.ts...");
    const res = await sql`SELECT 1;`;
    console.log("Success:", res);
  } catch (error) {
    console.error("Test query failed:", error);
  }
}

test();
