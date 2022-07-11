export default {
    name: 'media',
    type: 'image',
    title: 'Media',
    options: {
        hotspot: true,
    },
    fields: [
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        },
    ],
}