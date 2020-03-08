import { FONT_FAMILIES, FONT_SIZES, LINE_HEIGHTS } from './fonts';

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
        font-family: ${FONT_FAMILIES.surt};
        font-size: ${FONT_SIZES.default};
        line-height: ${LINE_HEIGHTS.default};
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

    .generic__section {
      @include max-width;
      display: grid;

      @include media('>=tablet') {
        grid-template-columns: repeat(6, 1fr);
        grid-column-gap: u(4);
      }

      @include media('>=desktop') {
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 32px;
      }
    }

    .modal--active {
      overflow: hidden;
      position: fixed;
      width: 100%;
    }

    #__next {
      height: 100%;
    }

    .main {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .main > *:nth-child(2) {
      flex: 1 0 auto;
    }

    .main > footer {
      flex-shrink: 0;
    }
`;
