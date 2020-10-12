import {
  FONT_STYLE_SURT_14_300,
  FONT_STYLE_SURT_16_400,
  FONT_STYLE_SURT_24_400,
  FONT_STYLE_SURT_40_400,
  FONT_FAMILIES
} from 'references/styles/fonts'

import { MEDIA_QUERIES } from 'references/styles/mediaqueries' // DONT CHANGE THIS TO references/styles AS IT WILL BREAK THE SERVER SIDE RENDERING

const getFontStyles = type => {
  if (!type) {
    console.error('CANNOT RENDER FONT: MISSING TYPE VARIABLE')
    return null
  }

  let fontProps = ''

  // Get font data based on the type variable
  const fontData = getFontData(type)

  for (const [key, value] of Object.entries(fontData)) {
    // Size is too bespoke on this website depending on application and device that we cannot set it straight away
    if (key === 'size') continue
    fontProps += `${key}: ${value};`
  }

  switch (type) {
    case FONT_STYLE_SURT_14_300:
      fontProps += `
        font-size: 1.2rem;
        line-height: 2.8rem;

        ${MEDIA_QUERIES.tabletUp}{
          font-size: 1.4rem;
          line-height: 3rem;
        }
      `
      break
    case FONT_STYLE_SURT_16_400:
      fontProps += `
        font-size: 1.2rem;
        line-height: 2.8rem;

        ${MEDIA_QUERIES.tabletUp}{
          font-size: 1.6rem;
          line-height: 3.2rem;
        }
      `
      break
    case FONT_STYLE_SURT_24_400:
      fontProps += `
        font-size: 1.5rem;
        line-height: 1.6;

        ${MEDIA_QUERIES.tabletUp} {
          font-size: 2.4rem;
        }
      `
      break
    case FONT_STYLE_SURT_40_400:
      fontProps += `
        font-size: 2.4rem;
        line-height: 1.4;

        ${MEDIA_QUERIES.tabletUp} {
          font-size: 4rem;
        }
      `
      break
  }

  return fontProps
}

const getFontData = type => {
  const lowerCaseType = type.toLowerCase()
  const arrayType = lowerCaseType.split('_')
  const typeProps = arrayType.splice(2, arrayType.length - 1)

  const data = {}

  typeProps.forEach((prop, i) => {
    switch (i) {
      // FONT-FAMILY
      case 0:
        data['font-family'] = FONT_FAMILIES[prop]
        break
      // FONT-SIZE
      case 1:
        data.size = prop
        break
      // FONT-WEIGHT
      case 2:
        data['font-weight'] = prop
        break
      // TEXT-TRANSFORM
      case 3:
        data['text-transform'] = prop
        data['letter-spacing'] = prop === 'uppercase' ? '.2rem' : null
        break
    }
  })

  return data
}

export default getFontStyles
