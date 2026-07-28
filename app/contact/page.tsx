import React from "react";
import { getContactPageSettings, ContactPageData } from "@/lib/sanity/client";
import { ContactPageClient } from "./contact-client";

export default async function ContactPage() {
  const contactSettings = await getContactPageSettings();

  return <ContactPageClient settings={contactSettings} />;
}
