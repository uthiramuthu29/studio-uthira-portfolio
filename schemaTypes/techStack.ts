import {defineType, defineField} from 'sanity'

export const techStack = defineType({
  name: 'techStack',
  title: 'Tech Stack',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stacks',
      title: 'Stacks',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'stack',
          title: 'Stack',
          fields: [
            defineField({
              name: 'stackName',
              title: 'Stack Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'stackLogo',
              title: 'Stack Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),

            defineField({
              name: 'stackType',
              title: 'Stack Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Language', value: 'Language'},
                  {title: 'Framework', value: 'Framework'},
                  {title: 'Library', value: 'Library'},
                  {title: 'Tool', value: 'Tool'},
                  {title: 'Database', value: 'Database'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
