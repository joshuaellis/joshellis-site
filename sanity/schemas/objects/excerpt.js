export default {
  name: 'excerpt',
  title: 'Excerpt',
  type: 'text',
  description: 'Used on search engines and sharing',
  rows: 3,
  validation: rule =>
    rule
      .required()
      .min(50)
      .max(160)
      .warning(
        'It is recommended to have an excerpt of between 50 and 160 characters.'
      )
}
