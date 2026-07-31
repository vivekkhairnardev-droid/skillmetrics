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

    const resources = await sql`
      SELECT * FROM resources ORDER BY published_at DESC;
    `;
    return NextResponse.json({ success: true, data: resources });
  } catch (error) {
    console.error("Failed to fetch resources:", error);
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
    const {
      id,
      title,
      slug,
      category,
      badge,
      readTime,
      summary,
      image,
      author,
      authorRole,
      keyTakeaways,
      content,
      seoTitle,
      seoDescription,
      seoKeywords,
    } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { success: false, error: "Title and slug are required" },
        { status: 400 }
      );
    }

    const takeawaysJson = keyTakeaways ? JSON.stringify(keyTakeaways) : "[]";

    if (id) {
      // Update existing resource
      await sql`
        UPDATE resources
        SET 
          title = ${title},
          slug = ${slug},
          category = ${category || "Skill Frameworks"},
          badge = ${badge || ""},
          read_time = ${readTime || "10 min read"},
          summary = ${summary || ""},
          image = ${image || "/skillmetrics.png"},
          author = ${author || "SkillMetrics Practice Group"},
          author_role = ${authorRole || "Talent Architecture & Research"},
          key_takeaways = ${takeawaysJson}::jsonb,
          content = ${content || ""},
          seo_title = ${seoTitle || title},
          seo_description = ${seoDescription || summary || ""},
          seo_keywords = ${seoKeywords || ""}
        WHERE id = ${id};
      `;
      return NextResponse.json({ success: true, message: "Resource updated successfully" });
    } else {
      // Create new resource
      await sql`
        INSERT INTO resources (
          title, slug, category, badge, read_time, summary, image,
          author, author_role, key_takeaways, content, seo_title, seo_description, seo_keywords
        ) VALUES (
          ${title}, ${slug}, ${category || "Skill Frameworks"}, ${badge || ""}, 
          ${readTime || "10 min read"}, ${summary || ""}, ${image || "/skillmetrics.png"}, 
          ${author || "SkillMetrics Practice Group"}, ${authorRole || "Talent Architecture & Research"}, 
          ${takeawaysJson}::jsonb, ${content || ""}, ${seoTitle || title}, ${seoDescription || summary || ""}, ${seoKeywords || ""}
        );
      `;
      return NextResponse.json({ success: true, message: "Resource created successfully" });
    }
  } catch (error) {
    console.error("Failed to save resource:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await auth.getSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }

    await sql`
      DELETE FROM resources WHERE id = ${id};
    `;

    return NextResponse.json({ success: true, message: "Resource deleted successfully" });
  } catch (error) {
    console.error("Failed to delete resource:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
