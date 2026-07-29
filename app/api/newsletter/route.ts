import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/save-submission";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const result = await saveSubmission("newsletterSubscription", {
      email,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to save newsletter subscription" },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("API error in newsletter subscription:", error);
    return NextResponse.json(
      { success: false, error: "Invalid request payload" },
      { status: 400 }
    );
  }
}
