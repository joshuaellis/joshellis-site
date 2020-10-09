export const FONT_FAMILIES = {
  surt: 'Surt, Helvetica, Arial, sans-serif'
}

export const FONT_STYLE_SURT_14_200 = 'FONT_STYLE_SURT_14_200'
export const FONT_STYLE_SURT_14_400 = 'FONT_STYLE_SURT_14_400'
export const FONT_STYLE_SURT_12_800_UPPERCASE =
  'FONT_STYLE_SURT_12_800_UPPERCASE'
export const FONT_STYLE_SURT_16_400 = 'FONT_STYLE_SURT_16_400'
export const FONT_STYLE_SURT_24_800 = 'FONT_STYLE_SURT_24_800'
export const FONT_STYLE_SURT_32_800 = 'FONT_STYLE_SURT_32_800'
export const FONT_STYLE_SURT_40_800 = 'FONT_STYLE_SURT_40_800'

export const CSS_FONTS = `
  @font-face {
    font-family: 'Surt';
    src: url('/fonts/Surt-Light.eot') format('embedded-opentype'),
      url('/fonts/Surt-Light.woff') format('woff'),
      url('/fonts/Surt-Light.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Surt';
    src: url('/fonts/Surt-Regular.eot') format('embedded-opentype'),
      url('/fonts/Surt-Regular.woff') format('woff'),
      url('/fonts/Surt-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Surt';
    src: url('/fonts/Surt-Bold.eot') format('embedded-opentype'),
      url('/fonts/Surt-Bold.woff') format('woff'),
      url('/fonts/Surt-Bold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
  }
`
