export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fieldsets: [
    {
      name: 'meta-data',
      title: 'SEO',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'info',
      title: 'Project info',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'project-links',
      title: 'Project URLs',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'project-cards',
      title: 'Project Cards',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'title'
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'excerpt',
      fieldset: 'meta-data'
    },
    {
      title: 'Share Image',
      name: 'share_image',
      type: 'image',
      fieldset: 'meta-data'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'custom-slug',
      fieldset: 'meta-data'
    },
    {
      title: 'Client',
      name: 'client',
      type: 'client',
      fieldset: 'info'
    },
    {
      title: 'Studio',
      name: 'studio',
      type: 'studio',
      fieldset: 'info'
    },
    {
      title: 'Role',
      name: 'role',
      type: 'role',
      fieldset: 'info'
    },
    {
      title: 'Text stack',
      name: 'tech',
      type: 'string',
      description: 'seperate each tech with a comma',
      fieldset: 'info'
    },
    {
      name: 'url',
      type: 'custom-url',
      title: 'URL to project',
      fieldset: 'project-links'
    },
    {
      name: 'iframe',
      type: 'url',
      title: 'iFrame URL for video',
      fieldset: 'project-links'
    },
    {
      name: 'card_color',
      type: 'color',
      title: 'Card background colour',
      fieldset: 'project-cards'
    },
    {
      name: 'card_full_image',
      type: 'boolean',
      title: 'Make image full width of card',
      layout: 'checkbox',
      options: {
        isHighlighted: true
      },
      fieldset: 'project-cards'
    },
    {
      name: 'card_home',
      type: 'image',
      title: 'Card for Home',
      description: 'This should be a 5:4 ratio',
      fieldset: 'project-cards'
    },
    {
      name: 'card_pagination',
      type: 'image',
      title: 'Image for pagination',
      description:
        'This should be cropped correctly and on a transparent background',
      fieldset: 'project-cards'
    },
    {
      name: 'body',
      type: 'project-block',
      title: 'Project text'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
