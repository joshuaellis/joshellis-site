export default {
  name: 'custom-slug',
  title: 'Slug',
  type: 'string',
  description: 'URL name, no spaces, use hyphens. e.g my-article-name',
  validation: rule =>
    rule.required().warning('A slug makes the url, this is necessary')
}
