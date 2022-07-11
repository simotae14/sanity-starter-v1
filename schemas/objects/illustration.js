export default         {
    title: 'Illustration',
    name: 'illustration',
    type: 'object',
    fields: [
        {
            name: 'media',
            type: 'array',
            title: 'Media',
            of: [
                {
                    name: 'media',
                    type: 'media',
                    title: 'Media'
                },
            ],
            options: {
              layout: 'grid',
            },
        },
    ]
}