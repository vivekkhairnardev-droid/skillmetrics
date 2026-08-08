import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

// Public GET endpoint to fetch section content for any page (e.g. /api/content?page=home)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageSlug = searchParams.get("page") || "home";

    const sections = await sql`
      SELECT section_id, section_name, content_json, updated_at
      FROM page_content 
      WHERE page_slug = ${pageSlug} 
      ORDER BY section_order ASC, id ASC;
    `;

    return NextResponse.json({ success: true, page: pageSlug, data: sections });
  } catch (error) {
    console.error("Failed to fetch public page content:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
