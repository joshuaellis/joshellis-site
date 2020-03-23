export const testMarkdownLink = (str, returnElement = true) => {
  const regexp = /\[([^[]+)\]\(([^)]+)\)/g
  if (regexp.test(str)) {
    if (returnElement) {
      return linkReplacer(str.split(regexp).filter(x => x !== ''))
    }
    return str.split(regexp).filter(x => x !== '')
  }
  return str
}

const linkReplacer = ([tagTitle, tagURL]) => (
  <a href={tagURL} rel='noopener noreferrer' target='_blank'>
    {tagTitle}
  </a>
)

export const generateColor = ({ r, g, b }, a) => `rgba(${r}, ${g}, ${b}, ${a})`

export const removeMarkdown = str => {
  const markdownReturned = testMarkdownLink(str, false)
  if (typeof markdownReturned === 'object') {
    return markdownReturned[0]
  }
  return markdownReturned
}

export const flattenArray = arr =>
  arr.reduce(
    (flat, toFlatten) =>
      flat.concat(
        Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
      ),
    []
  )
