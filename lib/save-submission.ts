import { sql } from "./db";

export async function saveSubmission(type: string, data: any) {
  try {
    if (type === "newsletterSubscription") {
      const email = data.email?.trim().toLowerCase();
      if (!email) {
        throw new Error("Email is required for newsletter subscription");
      }

      await sql`
        INSERT INTO newsletter_subscriptions (email)
        VALUES (${email})
        ON CONFLICT (email) DO NOTHING;
      `;
      return { success: true, savedTo: "postgres", type };
    }

    if (type === "contactSubmission") {
      const { name, email, phone, company, message } = data;
      if (!name || !email || !phone || !message) {
        throw new Error("Missing required fields for contact submission");
      }

      await sql`
        INSERT INTO contact_submissions (name, email, phone, company, message)
        VALUES (${name.trim()}, ${email.trim().toLowerCase()}, ${phone.trim()}, ${company?.trim() || ""}, ${message.trim()});
      `;
      return { success: true, savedTo: "postgres", type };
    }

    if (type === "demoRequest") {
      const { name, email, company, requirement } = data;
      if (!name || !email || !company) {
        throw new Error("Missing required fields for demo request");
      }

      await sql`
        INSERT INTO demo_requests (name, email, company, requirement)
        VALUES (${name.trim()}, ${email.trim().toLowerCase()}, ${company.trim()}, ${requirement?.trim() || ""});
      `;
      return { success: true, savedTo: "postgres", type };
    }

    throw new Error(`Unknown submission type: ${type}`);
  } catch (error) {
    console.error(`[Submission Error] Failed to write to Postgres:`, error);
    return { success: false, error: String(error) };
  }
}
