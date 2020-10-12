/* eslint-disable indent */

const getLanguage = ({ req }) => {
  return req
    ? req.headers['accept-language'].split(',')[0].split('-')[0]
    : typeof window !== 'undefined'
    ? window.navigator.language.split('-')[0]
    : 'en'
}

export default getLanguage
