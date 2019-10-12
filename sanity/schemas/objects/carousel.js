export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    {
      name: 'carousel_child',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'custom-image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
