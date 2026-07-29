import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/save-submission";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, requirement } = body;

    // Validate fields matching the BookDemoModal form requirements
    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, email, company)" },
        { status: 400 }
      );
    }

    const result = await saveSubmission("demoRequest", {
      name,
      email,
      company,
      requirement: requirement || "",
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to save demo request" },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("API error in demo request submission:", error);
    return NextResponse.json(
      { success: false, error: "Invalid request payload" },
      { status: 400 }
    );
  }
}
