import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/save-submission";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields matching form requirements
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, email, phone, message)" },
        { status: 400 }
      );
    }

    const result = await saveSubmission("contactSubmission", {
      name,
      email,
      phone,
      company: company || "",
      message,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to save contact submission" },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("API error in contact submission:", error);
    return NextResponse.json(
      { success: false, error: "Invalid request payload" },
      { status: 400 }
    );
  }
}
