export default {
  name: 'year',
  type: 'date',
  title: 'Year of project',
  validation: Rule => Rule.required(),
  options: {
    dateFormat: 'YYYY',
  },
};
