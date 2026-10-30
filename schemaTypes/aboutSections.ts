import { defineType, defineField } from "sanity";

export const aboutSections = defineType({
  name: "aboutSections",
  title: "About Sections",
  type: "document",

  fields: [
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "aboutSection",
          title: "About Section",
          fields: [
            defineField({
              name: "subHeading",
              title: "Sub Heading",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),

    // Signature for dark theme
    defineField({
      name: "signatureDark",
      title: "Signature - Dark Mode",
      type: "image",
      options: { hotspot: true },
    }),

    // Signature for light theme
    defineField({
      name: "signatureLight",
      title: "Signature - Light Mode",
      type: "image",
      options: { hotspot: true },
    }),

    // Profile photo
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});