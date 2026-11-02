import {defineType, defineField} from 'sanity'

export const books = defineType({
  name: 'books',
  title: 'Book Shelf',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'books',
      title: 'Books',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'book',
          title: 'Book',
          fields: [
            defineField({
              name: 'bookName',
              title: 'Book Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'bookImage',
              title: 'Book Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
  ],
})
