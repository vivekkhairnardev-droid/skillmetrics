import React from "react";
import type { ContactPageData } from "@/lib/types";
import { ContactPageClient } from "./contact-client";
import { sql } from "@/lib/db";

// Ensure the page gets fresh database values on each request
export const dynamic = "force-dynamic";

export default async function ContactPage() {
  // Fetch from database
  let dbMapped: Partial<ContactPageData> = {};
  try {
    const dbSettingsList = await sql`SELECT * FROM contact_page_settings WHERE id = 1 LIMIT 1;`;
    const dbSettings = dbSettingsList[0];
    if (dbSettings) {
      const mapping: Record<string, keyof ContactPageData> = {
        hero_title: "heroTitle",
        hero_subtitle: "heroSubtitle",
        email: "email",
        uk_office_label: "ukOfficeLabel",
        uk_office_badge: "ukOfficeBadge",
        uk_office_address: "ukOfficeAddress",
        uk_office_phone: "ukOfficePhone",
        india_office_label: "indiaOfficeLabel",
        india_office_badge: "indiaOfficeBadge",
        india_office_address: "indiaOfficeAddress",
        india_office_phone1: "indiaOfficePhone1",
        india_office_phone2: "indiaOfficePhone2",
        operating_hours: "operatingHours",
        sla_note: "slaNote",
        security_title: "securityTitle",
        security_description: "securityDescription",
        form_title: "formTitle",
        form_subtitle: "formSubtitle",
        success_message: "successMessage",
        success_description: "successDescription",
      };

      for (const [dbKey, clientKey] of Object.entries(mapping)) {
        if (dbSettings[dbKey] !== undefined && dbSettings[dbKey] !== null && dbSettings[dbKey] !== "") {
          (dbMapped as any)[clientKey] = dbSettings[dbKey];
        }
      }
    }
  } catch (e) {
    console.error("Failed to fetch contact settings from database:", e);
  }

  // Also merge content from page_content table (from Pages studio)
  try {
    const pageContentRows = await sql`SELECT * FROM page_content WHERE page_slug = 'contact';`;
    if (pageContentRows && pageContentRows.length > 0) {
      pageContentRows.forEach((row: any) => {
        const json = row.content_json || {};
        Object.keys(json).forEach((key) => {
          if (json[key] !== undefined && json[key] !== null && json[key] !== "") {
            (dbMapped as any)[key] = json[key];
          }
        });
      });
    }
  } catch (e) {
    console.error("Failed to fetch page_content for contact page:", e);
  }

  return <ContactPageClient settings={dbMapped as ContactPageData} />;
}
