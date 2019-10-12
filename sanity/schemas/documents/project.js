export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fieldsets: [
    {
      name: 'meta-data',
      title: 'Meta data',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'info',
      title: 'Project info',
    },
    {
      name: 'project-links',
      title: 'Project URLs',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'title',
    },
    {
      title: 'Year',
      name: 'year',
      type: 'year',
      fieldset: 'meta-data',
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'excerpt',
      fieldset: 'meta-data',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'custom-slug',
      fieldset: 'meta-data',
    },
    {
      title: 'Client',
      name: 'client',
      type: 'client',
      fieldset: 'info',
    },
    {
      title: 'Studio',
      name: 'studio',
      type: 'studio',
      fieldset: 'info',
    },
    {
      title: 'Role',
      name: 'role',
      type: 'role',
      fieldset: 'info',
    },
    {
      title: 'Text stack',
      name: 'tech',
      type: 'string',
      description: 'seperate each tech with a comma',
      fieldset: 'info',
    },
    {
      name: 'body',
      type: 'project-block',
      title: 'Project text',
    },
    {
      name: 'url',
      type: 'custom-url',
      title: 'URL to project',
      fieldset: 'project-links',
    },
    {
      name: 'iframe',
      type: 'url',
      title: 'iFrame URL for video',
      fieldset: 'project-links',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
