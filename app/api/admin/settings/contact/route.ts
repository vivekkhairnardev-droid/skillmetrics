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

    const contactSettings = await sql`SELECT * FROM contact_page_settings WHERE id = 1 LIMIT 1;`;

    return NextResponse.json({
      success: true,
      data: contactSettings[0] || {},
    });
  } catch (error) {
    console.error("Failed to fetch contact settings:", error);
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
    const settings = body.settings || body;

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
  } catch (error) {
    console.error("Failed to update contact settings:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
