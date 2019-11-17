import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Projects')
        .child(
          S.documentTypeList('project').defaultOrdering([
            { field: 'title', direction: 'asc' },
          ]),
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('All pages')
            .items([
              S.documentListItem()
                .id('about-page')
                .title('About Page')
                .schemaType('aboutpage'),
              S.documentListItem()
                .id('play-page')
                .title('Play Page')
                .schemaType('playpage'),
            ]),
        ),
      S.listItem()
        .title('Structures')
        .child(
          S.list()
            .title('All structures')
            .items([
              S.documentListItem()
                .id('project-structure')
                .title('Project structure')
                .schemaType('projectStructure'),
            ]),
        ),
    ]);
