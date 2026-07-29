import fs from "fs";
import path from "path";
import { writeClient } from "./sanity/write-client";

export async function saveSubmission(type: string, data: any) {
  const timestamp = new Date().toISOString();
  
  // Build document according to schema definitions
  const document: any = {
    _type: type,
    ...data,
  };

  if (type === "newsletterSubscription") {
    document.subscribedAt = timestamp;
  } else {
    document.submittedAt = timestamp;
  }

  if (writeClient) {
    try {
      const result = await writeClient.create(document);
      return { success: true, savedTo: "sanity", id: result._id };
    } catch (error) {
      console.error(`[Submission Error] Failed to write to Sanity:`, error);
      // Fall through to local fallback
    }
  }

  // Fallback: Store locally in the project workspace
  try {
    const dir = path.join(process.cwd(), "data", "submissions");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Save as individual JSON file
    const safeEmail = (data.email || "anon").replace(/[^a-zA-Z0-9]/g, "_");
    const fileName = `${type}-${safeEmail}-${Date.now()}.json`;
    const filePath = path.join(dir, fileName);
    
    fs.writeFileSync(filePath, JSON.stringify(document, null, 2), "utf-8");
    console.log(`[Submission Fallback] Saved locally to ${filePath} (Set SANITY_WRITE_TOKEN to save to CMS)`);
    return { success: true, savedTo: "local", file: fileName };
  } catch (err) {
    console.error(`[Submission Error] Local write fallback failed:`, err);
    return { success: false, error: String(err) };
  }
}
