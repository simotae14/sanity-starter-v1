export default {
    name: 'article',
    type: 'document',
    title: 'Article',
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            description: 'This one is the article title, use an unique name',
            validation: Rule => Rule.required()
        },
        {
            title: 'Cover',
            name: 'cover',
            type: 'image',
            description: 'is the main logo of the article',
            options: {
              hotspot: true // <-- Defaults to false
            }
        },
        {
            title: 'Blog Post',
            name: 'blogPost',
            type: 'blog_post'
        },
        {
            title: 'Publish date',
            name: 'publish_date',
            type: 'date'
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'cover',
        },
    }
}

