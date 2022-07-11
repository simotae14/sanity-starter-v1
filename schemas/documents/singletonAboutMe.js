export default {
    title: 'About Me',
    name: 'about',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            name: 'biography',
            type: 'array',
            title: 'Biography',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            title: 'Picture',
            name: 'picture',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            }
        }
    ]
};