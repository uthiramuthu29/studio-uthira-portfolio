import {defineType, defineField} from 'sanity'

export const socialLinks = defineType({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'document',
  fields: [
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Github', value: 'github'},
                  {title: 'Email', value: 'email'},
                  {title: 'Whatsapp', value: 'whatsapp'},
                  { title: "Resume", value: "resume" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              hidden: ({ parent }) => parent?.platform === "resume",
            }),
            defineField({
                name: 'file',
                title: 'Resume PDF',
                type: 'file',
                options: {
                    accept: ".pdf"
                },
                hidden: ({ parent }) => parent?.platform !== "resume",
            })
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
      validation: (Rule)=>Rule.required(),
    }),
  ],
  preview: {
    prepare(){
        return { title: "Social Links" };
    }
  }
})
