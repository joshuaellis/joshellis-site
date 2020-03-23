import MEDIA_QUERIES from './mediaQueries'

const maxWidth = 1600
const pageGutter = 16

export default {
  mobileHeaderHeight: 144,
  tabletHeaderHeight: 208,
  desktopHeaderHeight: 256,
  maxWidth,
  pageGutter,
  tabletPageGutter: 40,
  desktopPageGutter: 80,
  menuMaxHeight: 440,
  genericSection: `
    display: grid;

    ${MEDIA_QUERIES.tabletUp} {
      grid-template-columns: repeat(6, 1fr);
      grid-column-gap: 32px;
    }

    ${MEDIA_QUERIES.desktopUp} {
      margin: 0 auto;
      max-width: ${maxWidth + pageGutter * 5}px;
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 32px;
    }
  `
}
