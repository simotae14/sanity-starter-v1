import S from "@sanity/desk-tool/structure-builder";
import { createSuperPane } from 'sanity-super-pane';

export default () =>
  S.list()
    .title("Content")
    .items([
        S.listItem()
            .title("About Me")
            .child(
                S.editor()
                    .schemaType("about")
                    .documentId("singleton-about-me")
            ),
            S.divider(),
            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems()
              .filter(listItem => !['about'].includes(listItem.getId()))
    ])
    .title('Root')
      .items([
        S.listItem().title('Article').child(createSuperPane('article', S)),
        S.listItem().title('Category').child(createSuperPane('category', S)),
        S.listItem().title('About Me').child(createSuperPane('about', S)),
      ]);