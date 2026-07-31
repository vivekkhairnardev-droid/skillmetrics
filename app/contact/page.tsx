import React from "react";
import { getContactPageSettings } from "@/lib/sanity/client";
import type { ContactPageData } from "@/lib/sanity/types";
import { ContactPageClient } from "./contact-client";

export default async function ContactPage() {
  const contactSettings = await getContactPageSettings();

  return <ContactPageClient settings={contactSettings} />;
}
