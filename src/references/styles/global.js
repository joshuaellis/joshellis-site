import getFontStyles from 'helpers/getFontStyles'

import { FONT_STYLE_SURT_16_400 } from './fonts'
import { COLORS } from './colors'

export default `
    *,
    *:after,
    *:before {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    body {
        margin: 0;
        color: ${COLORS.black};
        ${getFontStyles(FONT_STYLE_SURT_16_400)}
        overflow: hidden;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    a {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
      color: inherit;
      text-decoration: none;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`
