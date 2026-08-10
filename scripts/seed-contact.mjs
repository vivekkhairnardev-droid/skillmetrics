import { neon, neonConfig } from "@neondatabase/serverless";
import fs from "fs";
import path from "path";
import dns from "node:dns";

if (typeof dns.setDefaultResultOrder === "function") {
  dns.setDefaultResultOrder("verbatim");
}

neonConfig.poolQueryViaFetch = false;

const envPath = path.resolve(".env.local");
let databaseUrl = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;

if (!databaseUrl && fs.existsSync(envPath)) {
  const envFileContent = fs.readFileSync(envPath, "utf-8");
  const unpooledMatch = envFileContent.match(/DATABASE_URL_UNPOOLED=["']?([^"'\s]+)["']?/);
  const pooledMatch = envFileContent.match(/DATABASE_URL=["']?([^"'\s]+)["']?/);
  databaseUrl = unpooledMatch ? unpooledMatch[1] : (pooledMatch ? pooledMatch[1] : undefined);
}

if (!databaseUrl) {
  console.error("DATABASE_URL not found in environment or .env.local");
  process.exit(1);
}

const sql = neon(databaseUrl);

async function seedContact() {
  console.log("Upserting contact page settings into database...");

  await sql`
    INSERT INTO contact_page_settings (
      id,
      hero_title,
      hero_subtitle,
      email,
      uk_office_label,
      uk_office_badge,
      uk_office_address,
      uk_office_phone,
      india_office_label,
      india_office_badge,
      india_office_address,
      india_office_phone1,
      india_office_phone2,
      operating_hours,
      sla_note,
      security_title,
      security_description,
      form_title,
      form_subtitle,
      success_message,
      success_description
    ) VALUES (
      1,
      'Enterprise Support, Demo & Contact Us',
      'Have questions about custom skill matrices, enterprise security, or biometric integrations? Talk to our specialists.',
      'info@skillmetrics.net',
      'UK Office',
      'Global HQ',
      'Flat-3, Farraline Court Strothers Lane, Inverness, IV11PN, UK',
      '+44 743 889 5016',
      'India Office',
      'R&D Center',
      '5th, 3rd floor, Sadashiv Motkari Complex, Sadashiv Nagar, Opp Sagar Sweets, Govind Nagar, Nashik – 422009',
      '+91 77200 86663',
      '+91 93731 33117',
      'Monday – Friday: 9:00 AM – 7:00 PM (IST / GMT)',
      '24/7 SLA Support for Enterprise Tier',
      'Enterprise Grade Security & Audits',
      'ISO 27001 & SOC-2 Type II certified. All competency assessments & biometric data encrypted via AES-256 with optional dedicated VPC deployment.',
      'Send Us a Message',
      'Fill out the details below and we''ll get back to you immediately.',
      'Message Sent Successfully!',
      'Thank you for reaching out. Our enterprise specialist will contact you at your email address within 2 hours.'
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_title = EXCLUDED.hero_title,
      hero_subtitle = EXCLUDED.hero_subtitle,
      email = EXCLUDED.email,
      uk_office_label = EXCLUDED.uk_office_label,
      uk_office_badge = EXCLUDED.uk_office_badge,
      uk_office_address = EXCLUDED.uk_office_address,
      uk_office_phone = EXCLUDED.uk_office_phone,
      india_office_label = EXCLUDED.india_office_label,
      india_office_badge = EXCLUDED.india_office_badge,
      india_office_address = EXCLUDED.india_office_address,
      india_office_phone1 = EXCLUDED.india_office_phone1,
      india_office_phone2 = EXCLUDED.india_office_phone2,
      operating_hours = EXCLUDED.operating_hours,
      sla_note = EXCLUDED.sla_note,
      security_title = EXCLUDED.security_title,
      security_description = EXCLUDED.security_description,
      form_title = EXCLUDED.form_title,
      form_subtitle = EXCLUDED.form_subtitle,
      success_message = EXCLUDED.success_message,
      success_description = EXCLUDED.success_description;
  `;

  console.log("✓ Successfully seeded contact page settings in database!");
  process.exit(0);
}

seedContact().catch((err) => {
  console.error("Failed to seed contact page data:", err);
  process.exit(1);
});
