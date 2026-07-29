import { defineType, defineField } from "sanity";

export const contactSubmission = defineType({
  name: "contactSubmission",
  title: "Contact Form Submissions",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      readOnly: true,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
      date: "submittedAt",
    },
    prepare(selection) {
      const { title, subtitle, date } = selection;
      const formattedDate = date ? new Date(date).toLocaleString() : "";
      return {
        title: title || "Anonymous",
        subtitle: `${subtitle || "No Email"} - ${formattedDate}`,
      };
    },
  },
});
