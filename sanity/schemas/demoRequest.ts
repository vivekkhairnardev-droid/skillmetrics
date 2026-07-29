import { defineType, defineField } from "sanity";

export const demoRequest = defineType({
  name: "demoRequest",
  title: "Demo Request Submissions",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "email",
      title: "Work Email",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "company",
      title: "Company / Organization",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "requirement",
      title: "Primary Goal / Requirement",
      type: "string",
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
      subtitle: "company",
      date: "submittedAt",
    },
    prepare(selection) {
      const { title, subtitle, date } = selection;
      const formattedDate = date ? new Date(date).toLocaleString() : "";
      return {
        title: title || "Anonymous",
        subtitle: `${subtitle || "No Company"} - ${formattedDate}`,
      };
    },
  },
});
