export default {
    title: 'Blog Post',
    name: 'blog_post',
    type: 'object',
    fields: [
        {
            name: 'text',
            type: 'array',
            title: 'Text',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            title: 'Quote',
            name: 'quote',
            type: 'quote'
        },
        {
            title: 'Illustration',
            name: 'illustration',
            type: 'illustration'
        }
    ]
};