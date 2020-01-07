export default {
  name: 'aboutpage',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'copy',
      type: 'simple-block',
      title: 'Main body',
    },
    {
      name: 'collaboration_text',
      type: 'markdown',
      title: 'Collaboration text',
    },
  ],
};