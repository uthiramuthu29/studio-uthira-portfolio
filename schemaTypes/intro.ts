import {defineType, defineField} from 'sanity'

export const intro = defineType({
  name: 'intro',
  title: 'Intro',
  type: 'document',

  fields: [
    defineField({
        name: "greeting",
        title: "Greeting",
        type: "string",
    }),
    defineField({
        name: "greetingImage",
        title: "Greeting Image",
        type: "image",
    }),
    defineField({
        name: "namePrefix",
        title: "Name Prefix",
        type: "string",
    }),
    defineField({
        name: "name",
        title: "Name",
        type: "string",
    }),
    defineField({
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule)=>Rule.required()
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: "image",
        validation: (Rule)=>Rule.required()
    }),
    defineField({
        name: "buttons",
        title: "Buttons",
        type: "array",
        of: [
          {
            type: "object",
            name: "button",
            title: "Button",
            fields: [
              defineField({
                name: "label",
                title: "Button Text",
                type: "string",
                validation: (Rule) => Rule.required(),
              }),
      
              defineField({
                name: "linkType",
                title: "Link Type",
                type: "string",
                options: {
                  list: [
                    { title: "Internal Page", value: "internal" },
                    { title: "External URL", value: "external" },
                    { title: "Resume PDF", value: "resume" },
                  ],
                },
                validation: (Rule) => Rule.required(),
              }),
      
              defineField({
                name: "url",
                title: "URL",
                type: "string",
                hidden: ({ parent }) =>
                  parent?.linkType === "resume",
              }),
      
              defineField({
                name: "openInNewTab",
                title: "Open in New Tab",
                type: "boolean",
                initialValue: false,
              }),
            ],
          },
        ],
      }),
  ]
})
