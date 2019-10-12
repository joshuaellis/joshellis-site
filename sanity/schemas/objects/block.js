export default {
  name: 'custom-block',
  title: 'Project text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
    },
    {
      type: 'custom-image',
      options: {
        hotspot: true,
      },
    },
    {
      type: 'carousel',
    },
  ],
};
