import { defineType, defineField } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page Settings",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "Enterprise Support, Demo & Contact Us",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      initialValue:
        "Have questions about custom skill matrices, enterprise security, or biometric integrations? Talk to our specialists.",
    }),

    // Email
    defineField({
      name: "email",
      title: "Official Email",
      type: "string",
      initialValue: "info@skillmetrics.net",
    }),

    // UK Office
    defineField({
      name: "ukOfficeLabel",
      title: "UK Office Label",
      type: "string",
      initialValue: "UK Office",
    }),
    defineField({
      name: "ukOfficeBadge",
      title: "UK Office Badge",
      type: "string",
      initialValue: "Global HQ",
    }),
    defineField({
      name: "ukOfficeAddress",
      title: "UK Office Address",
      type: "text",
      initialValue:
        "Flat-3, Farraline Court Strothers Lane, Inverness, IV11PN, UK",
    }),
    defineField({
      name: "ukOfficePhone",
      title: "UK Office Phone",
      type: "string",
      initialValue: "+44 743 889 5016",
    }),

    // India Office
    defineField({
      name: "indiaOfficeLabel",
      title: "India Office Label",
      type: "string",
      initialValue: "India Office",
    }),
    defineField({
      name: "indiaOfficeBadge",
      title: "India Office Badge",
      type: "string",
      initialValue: "R&D Center",
    }),
    defineField({
      name: "indiaOfficeAddress",
      title: "India Office Address",
      type: "text",
      initialValue:
        "5th, 3rd floor, Sadashiv Motkari Complex, Sadashiv Nagar, Opp Sagar Sweets, Govind Nagar, Nashik – 422009",
    }),
    defineField({
      name: "indiaOfficePhone1",
      title: "India Office Phone 1",
      type: "string",
      initialValue: "+91 77200 86663",
    }),
    defineField({
      name: "indiaOfficePhone2",
      title: "India Office Phone 2",
      type: "string",
      initialValue: "+91 93731 33117",
    }),

    // Operating Hours
    defineField({
      name: "operatingHours",
      title: "Operating Hours Text",
      type: "string",
      initialValue: "Monday – Friday: 9:00 AM – 7:00 PM (IST / GMT)",
    }),
    defineField({
      name: "slaNote",
      title: "SLA Support Note",
      type: "string",
      initialValue: "24/7 SLA Support for Enterprise Tier",
    }),

    // Security Badge
    defineField({
      name: "securityTitle",
      title: "Security Badge Title",
      type: "string",
      initialValue: "Enterprise Grade Security & Audits",
    }),
    defineField({
      name: "securityDescription",
      title: "Security Description",
      type: "text",
      initialValue:
        "ISO 27001 & SOC-2 Type II certified. All competency assessments & biometric data encrypted via AES-256 with optional dedicated VPC deployment.",
    }),

    // Form Settings
    defineField({
      name: "formTitle",
      title: "Form Title",
      type: "string",
      initialValue: "Send Us a Message",
    }),
    defineField({
      name: "formSubtitle",
      title: "Form Subtitle",
      type: "string",
      initialValue:
        "Fill out the details below and we'll get back to you immediately.",
    }),
    defineField({
      name: "successMessage",
      title: "Form Success Message",
      type: "string",
      initialValue: "Message Sent Successfully!",
    }),
    defineField({
      name: "successDescription",
      title: "Form Success Description",
      type: "text",
      initialValue:
        "Thank you for reaching out. Our enterprise specialist will contact you at your email address within 2 hours.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Contact Page Settings" };
    },
  },
});
