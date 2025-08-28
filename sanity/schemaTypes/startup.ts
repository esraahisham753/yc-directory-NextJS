import { defineField, defineType } from "sanity";

export const startup = defineType({
    type: 'document',
    name: 'startup',
    title: 'Startup',
    fields: [
        defineField({
                name: 'slug',
                type: "slug",
                options: {
                    source: 'title'
                }
        }),
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: {
                type: 'author'
            }
        }),
        defineField({
            name: 'views',
            type: 'number'
        }),
        defineField({
            name: 'image',
            type: 'url',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'description',
            type: 'text'
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (rule) => rule.min(1).max(20).required().error('Please, enter a valid category')
        }),
        defineField({
            name: 'pitch',
            type: 'markdown'
        })
    ]
})