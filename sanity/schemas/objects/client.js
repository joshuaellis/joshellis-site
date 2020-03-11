export default {
  name: 'client',
  type: 'markdown',
  title: 'Client',
  validation: Rule => Rule.required(),
  options: {
    minRows: 1
  }
}
