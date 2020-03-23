export default {
  name: 'studio',
  type: 'markdown',
  title: 'Studio',
  validation: Rule => Rule.required(),
  options: {
    minRows: 1
  }
}
