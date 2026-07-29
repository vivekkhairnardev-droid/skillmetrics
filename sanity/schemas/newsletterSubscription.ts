import { defineType, defineField } from "sanity";

export const newsletterSubscription = defineType({
  name: "newsletterSubscription",
  title: "Newsletter Subscriptions",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "subscribedAt",
      title: "Subscribed At",
      type: "datetime",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "email",
      date: "subscribedAt",
    },
    prepare(selection) {
      const { title, date } = selection;
      const formattedDate = date ? new Date(date).toLocaleString() : "";
      return {
        title: title || "No Email",
        subtitle: `Subscribed on ${formattedDate || "N/A"}`,
      };
    },
  },
});
