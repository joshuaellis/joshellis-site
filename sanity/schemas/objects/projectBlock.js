export default {
  name: 'project-block',
  title: 'Project text',
  type: 'array',
  of: [
    {
      type: 'block',
      lists: [],
      styles: [
        { title: 'Standfirst', value: 'normal' },
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
      ],
      marks: {
        annotations: [
          { name: 'color', title: 'Color', type: 'color' },
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                name: 'url',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'custom-image',
      options: {
        hotspot: true,
      },
    },
    {
      type: 'multiple_images',
    },
  ],
};
