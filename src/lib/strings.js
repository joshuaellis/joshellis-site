import STRINGS from '../../public/strings.json'

export default function t (id, replacements) {
  const value = STRINGS[id]

  if (!value) {
    return null
  }

  if (typeof value !== 'string') {
    return value
  }

  if (replacements) {
    return value.replace(/{(\w+)}/g, (match, i) => replacements[i] || match)
  }

  return value
}
