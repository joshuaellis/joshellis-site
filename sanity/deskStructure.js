import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Projects')
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('All pages')
            .items([
              S.listItem()
                .title('Home page')
                .child(
                  S.editor()
                    .title('Home')
                    .id('home-page')
                    .schemaType('homepage')
                    .documentId('home-page'),
                ),
              S.listItem()
                .title('About page')
                .child(
                  S.editor()
                    .title('About')
                    .id('about-page')
                    .schemaType('aboutpage')
                    .documentId('about-page'),
                ),
            ]),
        ),
    ]);
