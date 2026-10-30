import { defineType, defineField } from 'sanity';

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Project Description',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'darkLogo',
            title: 'Project Logo - Dark',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'lightLogo',
            title: 'Project Logo - Light',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'image',
            title: 'Project Preview Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'projectUrl',
            title: 'Project URL',
            type: 'string',
        }),
        defineField({
            name: 'featured',
            title: 'Featured Project',
            type: 'boolean',
            initialValue: false
        })
    ]
})