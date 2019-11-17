export default {
  name: 'playpage',
  title: 'Play',
  type: 'document',
  fields: [
    {
      name: 'work',
      type: 'array',
      title: 'Play Work',
      of: [
        {
          type: 'object',
          name: 'play_project',
          title: 'Project',
          fields: [
            {
              type: 'string',
              name: 'play_slug',
              title: 'Slug',
              description: 'This must be the same name as the file in static',
            },
            {
              type: 'image',
              name: 'play_gif',
              title: 'Gif',
              description: 'This must be the same 16:9 ratio',
            },
          ],
        },
      ],
    },
  ],
};
