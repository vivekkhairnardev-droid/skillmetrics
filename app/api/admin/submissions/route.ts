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

    const contactSubmissions = await sql`
      SELECT * FROM contact_submissions ORDER BY submitted_at DESC;
    `;
    const newsletterSubscriptions = await sql`
      SELECT * FROM newsletter_subscriptions ORDER BY subscribed_at DESC;
    `;
    const demoRequests = await sql`
      SELECT * FROM demo_requests ORDER BY submitted_at DESC;
    `;

    return NextResponse.json({
      success: true,
      data: {
        contactSubmissions,
        newsletterSubscriptions,
        demoRequests,
      },
    });
  } catch (error) {
    console.error("Failed to fetch submissions:", error);
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
    const type = searchParams.get("type"); // 'contact', 'newsletter', 'demo'

    if (!id || !type) {
      return NextResponse.json(
        { success: false, error: "ID and type are required" },
        { status: 400 }
      );
    }

    if (type === "contact") {
      await sql`DELETE FROM contact_submissions WHERE id = ${id};`;
    } else if (type === "newsletter") {
      await sql`DELETE FROM newsletter_subscriptions WHERE id = ${id};`;
    } else if (type === "demo") {
      await sql`DELETE FROM demo_requests WHERE id = ${id};`;
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid submission type" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: "Submission deleted successfully" });
  } catch (error) {
    console.error("Failed to delete submission:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
