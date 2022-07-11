import { object } from "prop-types";

export default {
    name: 'category',
    type: 'document',
      title: 'Category',
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: 'Articles',
            name: 'articles',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'article'
                        }
                    ]
                }
            ]
        }
    ]
}