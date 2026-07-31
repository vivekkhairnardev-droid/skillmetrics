import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { auth } from "@/lib/auth/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await auth.getSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const siteSettings = await sql`SELECT * FROM site_settings WHERE id = 1 LIMIT 1;`;
    const contactSettings = await sql`SELECT * FROM contact_page_settings WHERE id = 1 LIMIT 1;`;

    return NextResponse.json({
      success: true,
      data: {
        site: siteSettings[0] || {},
        contact: contactSettings[0] || {},
      },
    });
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth.getSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { type, settings } = body;

    if (!type || !settings) {
      return NextResponse.json(
        { success: false, error: "Type and settings are required" },
        { status: 400 }
      );
    }

    if (type === "site") {
      const {
        hero_title,
        hero_subtitle,
        hero_cta_text,
        features_title,
        features_subtitle,
        card1_image,
        card2_image,
        card3_image,
        card4_image,
        card5_image,
        capabilities_title,
        capabilities_subtitle,
        comparison_title,
        comparison_subtitle,
        why_us_title,
        why_us_subtitle,
        roi_title,
        roi_subtitle,
        stat1_value,
        stat1_label,
        stat2_value,
        stat2_label,
        stat3_value,
        stat3_label,
        testimonials_title,
        testimonials_subtitle,
        banner_enabled,
        banner_text,
        banner_link,
        calendly_url,
        meta_title,
        meta_description,
      } = settings;

      await sql`
        UPDATE site_settings
        SET
          hero_title = ${hero_title ?? null},
          hero_subtitle = ${hero_subtitle ?? null},
          hero_cta_text = ${hero_cta_text ?? null},
          features_title = ${features_title ?? null},
          features_subtitle = ${features_subtitle ?? null},
          card1_image = ${card1_image ?? null},
          card2_image = ${card2_image ?? null},
          card3_image = ${card3_image ?? null},
          card4_image = ${card4_image ?? null},
          card5_image = ${card5_image ?? null},
          capabilities_title = ${capabilities_title ?? null},
          capabilities_subtitle = ${capabilities_subtitle ?? null},
          comparison_title = ${comparison_title ?? null},
          comparison_subtitle = ${comparison_subtitle ?? null},
          why_us_title = ${why_us_title ?? null},
          why_us_subtitle = ${why_us_subtitle ?? null},
          roi_title = ${roi_title ?? null},
          roi_subtitle = ${roi_subtitle ?? null},
          stat1_value = ${stat1_value ?? null},
          stat1_label = ${stat1_label ?? null},
          stat2_value = ${stat2_value ?? null},
          stat2_label = ${stat2_label ?? null},
          stat3_value = ${stat3_value ?? null},
          stat3_label = ${stat3_label ?? null},
          testimonials_title = ${testimonials_title ?? null},
          testimonials_subtitle = ${testimonials_subtitle ?? null},
          banner_enabled = ${banner_enabled ?? false},
          banner_text = ${banner_text ?? null},
          banner_link = ${banner_link ?? null},
          calendly_url = ${calendly_url ?? null},
          meta_title = ${meta_title ?? null},
          meta_description = ${meta_description ?? null}
        WHERE id = 1;
      `;

      return NextResponse.json({ success: true, message: "Site settings updated successfully" });
    }

    if (type === "contact") {
      const {
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
        success_description,
      } = settings;

      await sql`
        UPDATE contact_page_settings
        SET
          hero_title = ${hero_title ?? null},
          hero_subtitle = ${hero_subtitle ?? null},
          email = ${email ?? null},
          uk_office_label = ${uk_office_label ?? null},
          uk_office_badge = ${uk_office_badge ?? null},
          uk_office_address = ${uk_office_address ?? null},
          uk_office_phone = ${uk_office_phone ?? null},
          india_office_label = ${india_office_label ?? null},
          india_office_badge = ${india_office_badge ?? null},
          india_office_address = ${india_office_address ?? null},
          india_office_phone1 = ${india_office_phone1 ?? null},
          india_office_phone2 = ${india_office_phone2 ?? null},
          operating_hours = ${operating_hours ?? null},
          sla_note = ${sla_note ?? null},
          security_title = ${security_title ?? null},
          security_description = ${security_description ?? null},
          form_title = ${form_title ?? null},
          form_subtitle = ${form_subtitle ?? null},
          success_message = ${success_message ?? null},
          success_description = ${success_description ?? null}
        WHERE id = 1;
      `;

      return NextResponse.json({ success: true, message: "Contact page settings updated successfully" });
    }

    return NextResponse.json(
      { success: false, error: "Invalid settings type" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Failed to update settings:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
