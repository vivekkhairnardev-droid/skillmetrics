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

    const posts = await sql`
      SELECT * FROM posts ORDER BY published_at DESC;
    `;
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    console.error("Failed to fetch posts:", error);
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
      excerpt,
      mainImage,
      readingTime,
      category,
      authorName,
      authorRole,
      authorAvatar,
      seoTitle,
      seoDescription,
      seoKeywords,
      content,
    } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { success: false, error: "Title and slug are required" },
        { status: 400 }
      );
    }

    if (id) {
      // Update existing post
      await sql`
        UPDATE posts
        SET 
          title = ${title},
          slug = ${slug},
          excerpt = ${excerpt || ""},
          main_image = ${mainImage || "/skillmetrics.png"},
          reading_time = ${readingTime || "5 min read"},
          category = ${category || "Product Updates"},
          author_name = ${authorName || "SkillMetrics Team"},
          author_role = ${authorRole || "Product Editorial"},
          author_avatar = ${authorAvatar || null},
          seo_title = ${seoTitle || title},
          seo_description = ${seoDescription || excerpt || ""},
          seo_keywords = ${seoKeywords || ""},
          content = ${content || ""}
        WHERE id = ${id};
      `;
      return NextResponse.json({ success: true, message: "Post updated successfully" });
    } else {
      // Create new post
      await sql`
        INSERT INTO posts (
          title, slug, excerpt, main_image, reading_time, category, 
          author_name, author_role, author_avatar, seo_title, seo_description, seo_keywords, content
        ) VALUES (
          ${title}, ${slug}, ${excerpt || ""}, ${mainImage || "/skillmetrics.png"}, 
          ${readingTime || "5 min read"}, ${category || "Product Updates"}, 
          ${authorName || "SkillMetrics Team"}, ${authorRole || "Product Editorial"}, 
          ${authorAvatar || null}, ${seoTitle || title}, ${seoDescription || excerpt || ""}, ${seoKeywords || ""}, ${content || ""}
        );
      `;
      return NextResponse.json({ success: true, message: "Post created successfully" });
    }
  } catch (error) {
    console.error("Failed to save post:", error);
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
      DELETE FROM posts WHERE id = ${id};
    `;

    return NextResponse.json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    console.error("Failed to delete post:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
