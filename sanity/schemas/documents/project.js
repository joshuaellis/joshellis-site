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
      title: 'Client',
      name: 'client',
      type: 'client',
      fieldset: 'meta-data',
    },
    {
      title: 'Studio',
      name: 'studio',
      type: 'studio',
      fieldset: 'meta-data',
    },
    {
      title: 'Role',
      name: 'role',
      type: 'role',
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
      name: 'body',
      type: 'custom-block',
      title: 'Project text',
    },
    {
      name: 'url',
      type: 'custom-url',
      title: 'URL to project',
    },
    {
      name: 'iframe',
      type: 'custom-url',
      title: 'iFrame URL for video',
    },
    {
      name: 'tech_stack',
      type: 'tech_stack',
      title: 'Tech stack of project',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
