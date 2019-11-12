export default {
  name: 'projectStructure',
  title: 'Project Structure',
  type: 'document',
  fields: [
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'year',
          title: 'Year',
          fields: [
            {
              type: 'string',
              name: 'year_title',
              title: 'Year',
            },
            {
              title: 'Project',
              name: 'year_project',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'project' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
