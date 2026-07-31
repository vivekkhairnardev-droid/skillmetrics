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

    const studies = await sql`
      SELECT * FROM case_studies ORDER BY published_at DESC;
    `;
    return NextResponse.json({ success: true, data: studies });
  } catch (error) {
    console.error("Failed to fetch case studies:", error);
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
      companyName,
      companyLogo,
      industry,
      excerpt,
      coverImage,
      challenge,
      solution,
      results,
      testimonialQuote,
      testimonialAuthor,
      testimonialRole,
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

    const resultsJson = results ? JSON.stringify(results) : "[]";

    if (id) {
      // Update existing case study
      await sql`
        UPDATE case_studies
        SET 
          title = ${title},
          slug = ${slug},
          company_name = ${companyName || ""},
          company_logo = ${companyLogo || null},
          industry = ${industry || "Other"},
          excerpt = ${excerpt || ""},
          cover_image = ${coverImage || "/skillmetrics.png"},
          challenge = ${challenge || ""},
          solution = ${solution || ""},
          results = ${resultsJson}::jsonb,
          testimonial_quote = ${testimonialQuote || ""},
          testimonial_author = ${testimonialAuthor || ""},
          testimonial_role = ${testimonialRole || ""},
          content = ${content || ""},
          seo_title = ${seoTitle || title},
          seo_description = ${seoDescription || excerpt || ""},
          seo_keywords = ${seoKeywords || ""}
        WHERE id = ${id};
      `;
      return NextResponse.json({ success: true, message: "Case study updated successfully" });
    } else {
      // Create new case study
      await sql`
        INSERT INTO case_studies (
          title, slug, company_name, company_logo, industry, excerpt, cover_image,
          challenge, solution, results, testimonial_quote, testimonial_author, testimonial_role,
          content, seo_title, seo_description, seo_keywords
        ) VALUES (
          ${title}, ${slug}, ${companyName || ""}, ${companyLogo || null}, ${industry || "Other"}, 
          ${excerpt || ""}, ${coverImage || "/skillmetrics.png"}, ${challenge || ""}, ${solution || ""}, 
          ${resultsJson}::jsonb, ${testimonialQuote || ""}, ${testimonialAuthor || ""}, ${testimonialRole || ""}, 
          ${content || ""}, ${seoTitle || title}, ${seoDescription || excerpt || ""}, ${seoKeywords || ""}
        );
      `;
      return NextResponse.json({ success: true, message: "Case study created successfully" });
    }
  } catch (error) {
    console.error("Failed to save case study:", error);
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
      DELETE FROM case_studies WHERE id = ${id};
    `;

    return NextResponse.json({ success: true, message: "Case study deleted successfully" });
  } catch (error) {
    console.error("Failed to delete case study:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
