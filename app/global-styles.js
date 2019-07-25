import { createGlobalStyle } from 'styled-components';
import { PALETTE } from './constants';

/* SURT regular */
import SurtRegularEOT from './fonts/Surt-Regular.eot';
import SurtRegularTTF from './fonts/Surt-Regular.ttf';
import SurtRegularWOFF from './fonts/Surt-Regular.woff';
import SurtRegularWOFF2 from './fonts/Surt-Regular.woff2';

/* SURT UltraBold */
import SurtUltraBoldEOT from './fonts/Surt-UltraBold.eot';
import SurtUltraBoldTTF from './fonts/Surt-UltraBold.ttf';
import SurtUltraBoldWOFF from './fonts/Surt-UltraBold.woff';
import SurtUltraBoldWOFF2 from './fonts/Surt-UltraBold.woff2';

/* SURT Medium */
import SurtMediumEOT from './fonts/Surt-Medium.eot';
import SurtMediumTTF from './fonts/Surt-Medium.ttf';
import SurtMediumWOFF from './fonts/Surt-Medium.woff';
import SurtMediumWOFF2 from './fonts/Surt-Medium.woff2';

/* SURT Light */
import SurtLightEOT from './fonts/Surt-Light.eot';
import SurtLightTTF from './fonts/Surt-Light.ttf';
import SurtLightWOFF from './fonts/Surt-Light.woff';
import SurtLightWOFF2 from './fonts/Surt-Light.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Surt';
    src: url('${SurtRegularEOT}') format('embedded-opentype'),
        url('${SurtRegularWOFF2}') format('woff2'),
        url('${SurtRegularWOFF}') format('woff'),
        url('${SurtRegularTTF}') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Surt';
    src: url('${SurtUltraBoldEOT}') format('embedded-opentype'),
        url('${SurtUltraBoldWOFF2}') format('woff2'),
        url('${SurtUltraBoldWOFF}') format('woff'),
        url('${SurtUltraBoldTTF}') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Surt';
    src: url('${SurtMediumEOT}') format('embedded-opentype'),
        url('${SurtMediumWOFF2}') format('woff2'),
        url('${SurtMediumWOFF}') format('woff'),
        url('${SurtMediumTTF}') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Surt';
    src: url('${SurtLightEOT}') format('embedded-opentype'),
        url('${SurtLightWOFF2}') format('woff2'),
        url('${SurtLightWOFF}') format('woff'),
        url('${SurtLightTTF}') format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  html,
  body {
    margin:0px;
    height: 100%;
    width: 100%;
    font-size:62.5%;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Surt', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fdfdfd;
    min-height: 100%;
    min-width: 100%;
  }

  h1{
    font-family: 'Surt','Helvetica Neue', Helvetica, sans-serif;
    font-size: 4.4rem;
    line-height: 56px;
    font-weight: 500;
    color: ${PALETTE.white};
    margin:0px;
  }
  h2{
    font-family: 'Surt','Helvetica Neue', Helvetica, sans-serif;
    font-size: 2.6rem;
    line-height: 36px;
    font-weight: 500;
    color: ${PALETTE.white};
    margin:0px;
    .blue{
      color: ${PALETTE.blue};
    }
    .red{
      color: ${PALETTE.red};
    }
    .orange{
      color: ${PALETTE.orange};
    }
    .green{
      color: ${PALETTE.green};
    }
  }
  h3{
    font-family: 'Surt','Helvetica Neue', Helvetica, sans-serif;
    font-size: 1.8rem;
    line-height: 36px;
    font-weight: 400;
    color: ${PALETTE.black};
    margin:0px;
    &.white{
      color: ${PALETTE.white};
    }
    .label{
      font-size: 1.4rem;
      font-weight: 800;
      color: inherit;
      margin:0px;
    }
  }
  p,ul{
    font-family: 'Surt','Helvetica Neue', Helvetica, sans-serif;
    font-size: 1.4rem;
    line-height: 24px;
    font-weight: 400;
    color: ${PALETTE.black};
    margin:0px;
    .label{
      font-weight: 800;
      color: inherit;
    }
  }
  label{
    font-family: 'Surt','Helvetica Neue', Helvetica, sans-serif;
    font-size: 1.4rem;
    line-height: 20px;
    font-weight: 800;
    color: ${PALETTE.black};
    margin:0px;
    &.white{
      color: ${PALETTE.white};
    }
    &.imageCaption{
      font-size: 1.2rem;
      font-weight: 200;
      color: inherit;
      position: relative;
      top:2px;
    }
  }

  footer{
    font-family: 'Surt','Helvetica Neue', Helvetica, sans-serif;
    font-size: 1.8rem !important;
    line-height: 36px;
    font-weight: 500;
    color: ${PALETTE.black};
    margin:0px;
  }

  a{
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
  }

  @media(min-width:768px){
    h1{
      font-size: 6.4rem;
      line-height: 80px;
    }
    h2{
      font-size: 3.6rem;
      line-height: 36px;
    }
    h3{
      font-size: 2.6rem;
      line-height: 40px;
      .label{
        font-size: 1.6rem;
      }
    }
    p,ul{
      font-size: 1.6rem;
      line-height: 28px;
    }
    label{
      font-size: 1.6rem;
      line-height: 24px;
      &.imageCaption{
        font-size: 1.4rem;
      }
    }
  }

  @media(min-width:1280px){
    h1{
      font-size: 8rem;
      line-height: 96px;
    }
    h2{
      font-size: 4rem;
      line-height: 40px;
    }
    h3{
      font-size: 3.2rem;
      line-height: 48px;
    }
    p,ul{
      .standfirst{
        font-size:1.8rem;
        line-height: 32px;
      }
    }
  }
`;

export default GlobalStyle;
