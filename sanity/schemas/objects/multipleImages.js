export default {
  name: 'multiple_images',
  title: 'Multiple Images',
  type: 'object',
  fields: [
    {
      name: 'single_image',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'custom-image',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ]
}
