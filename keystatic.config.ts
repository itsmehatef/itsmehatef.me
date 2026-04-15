import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: { name: "itsmehatef.me" },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/data/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { isRequired: true, length: { min: 1 } },
          },
        }),
        author: fields.text({
          label: "Author",
          defaultValue: "Hatef Kasraei",
        }),
        pubDatetime: fields.datetime({
          label: "Published",
          defaultValue: { kind: "now" },
          validation: { isRequired: true },
        }),
        modDatetime: fields.datetime({
          label: "Modified",
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: { isRequired: true },
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        featured: fields.checkbox({
          label: "Featured",
          defaultValue: false,
        }),
        draft: fields.checkbox({
          label: "Draft",
          defaultValue: false,
        }),
        ogImage: fields.image({
          label: "OG Image",
          directory: "src/assets/images",
          publicPath: "@/assets/images/",
        }),
        canonicalURL: fields.text({
          label: "Canonical URL",
          description: "Optional override for the canonical URL",
        }),
        hideEditPost: fields.checkbox({
          label: "Hide edit post link",
          defaultValue: false,
        }),
        timezone: fields.text({
          label: "Timezone",
          description: "Optional IANA timezone (e.g. Europe/Berlin)",
        }),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
        }),
      },
    }),
  },
});
