export default {
  name: 'simple-block',
  title: 'Project text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [],
        annotations: [
          { name: 'color', title: 'Color', type: 'color' },
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                name: 'url',
                type: 'url'
              }
            ]
          }
        ]
      }
    }
  ]
}
