/* eslint-disable indent */

const getLanguage = ({ req }) =>
  req
    ? req.headers['accept-language'].split(',')[0].split('-')[0]
    : typeof window !== 'undefined'
    ? window.navigator.language
    : 'en'

export default getLanguage
