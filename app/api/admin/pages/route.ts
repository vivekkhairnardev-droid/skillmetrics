import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { auth } from "@/lib/auth/server";

export const dynamic = "force-dynamic";

// GET: Fetch all pages or a specific page's sections
export async function GET(request: Request) {
  try {
    const session = await auth.getSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const pageSlug = searchParams.get("page");

    if (pageSlug) {
      // Get sections for a specific page
      const sections = await sql`
        SELECT * FROM page_content 
        WHERE page_slug = ${pageSlug} 
        ORDER BY section_order ASC, id ASC;
      `;
      return NextResponse.json({ success: true, data: sections });
    }

    // Get all distinct pages with their section counts
    const pages = await sql`
      SELECT page_slug, page_name, COUNT(*) as section_count, 
             MAX(updated_at) as last_updated
      FROM page_content 
      GROUP BY page_slug, page_name 
      ORDER BY page_name ASC;
    `;
    return NextResponse.json({ success: true, data: pages });
  } catch (error) {
    console.error("Failed to fetch page content:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

// POST: Upsert a section's content for a page
export async function POST(request: Request) {
  try {
    const session = await auth.getSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id, page_slug, page_name, section_id, section_name, content_json } = body;

    if (!page_slug || !section_id) {
      return NextResponse.json(
        { success: false, error: "page_slug and section_id are required" },
        { status: 400 }
      );
    }

    if (id) {
      // Update existing section
      await sql`
        UPDATE page_content 
        SET 
          section_name = ${section_name ?? null},
          content_json = ${JSON.stringify(content_json)}::jsonb,
          updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id};
      `;
      return NextResponse.json({ success: true, message: "Section updated successfully" });
    } else {
      // Insert or update (upsert by page_slug + section_id)
      await sql`
        INSERT INTO page_content (page_slug, page_name, section_id, section_name, content_json, section_order)
        VALUES (
          ${page_slug}, 
          ${page_name ?? page_slug}, 
          ${section_id}, 
          ${section_name ?? section_id},
          ${JSON.stringify(content_json)}::jsonb,
          COALESCE((SELECT MAX(section_order) + 1 FROM page_content WHERE page_slug = ${page_slug}), 0)
        )
        ON CONFLICT (page_slug, section_id) 
        DO UPDATE SET 
          section_name = EXCLUDED.section_name,
          content_json = EXCLUDED.content_json,
          updated_at = CURRENT_TIMESTAMP;
      `;
      // Revalidate path for instant Next.js cache clearance
      try {
        const { revalidatePath } = await import("next/cache");
        revalidatePath("/", "layout");
        if (page_slug !== "home") {
          revalidatePath(`/${page_slug}`);
        }
      } catch (e) {
        console.error("Failed to revalidate path:", e);
      }

      return NextResponse.json({ success: true, message: "Section saved successfully" });
    }
  } catch (error) {
    console.error("Failed to save page content:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

// DELETE: Remove a section
export async function DELETE(request: Request) {
  try {
    const session = await auth.getSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const pageSlug = searchParams.get("page");

    if (id) {
      await sql`DELETE FROM page_content WHERE id = ${parseInt(id)};`;
      return NextResponse.json({ success: true, message: "Section deleted" });
    } else if (pageSlug) {
      await sql`DELETE FROM page_content WHERE page_slug = ${pageSlug};`;
      return NextResponse.json({ success: true, message: "All page sections deleted" });
    }

    return NextResponse.json(
      { success: false, error: "id or page parameter required" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Failed to delete page content:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
