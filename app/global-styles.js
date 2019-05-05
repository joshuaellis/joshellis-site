import { createGlobalStyle } from 'styled-components';

import FracExtraBoldWOFF2 from './assets/fonts/FRAC/FRAC-ExtraBold.woff2';
import FracExtraBoldWOFF from './assets/fonts/FRAC/FRAC-ExtraBold.woff';
import FracExtraBoldTTF from './assets/fonts/FRAC/FRAC-ExtraBold.ttf';
import FracBoldWOFF2 from './assets/fonts/FRAC/FRAC-Bold.woff2';
import FracBoldWOFF from './assets/fonts/FRAC/FRAC-Bold.woff';
import FracBoldTTF from './assets/fonts/FRAC/FRAC-Bold.ttf';
import FracMediumWOFF2 from './assets/fonts/FRAC/FRAC-Medium.woff2';
import FracMediumWOFF from './assets/fonts/FRAC/FRAC-Medium.woff';
import FracMediumTTF from './assets/fonts/FRAC/FRAC-Medium.ttf';
import FracRegularWOFF2 from './assets/fonts/FRAC/FRAC-Regular.woff2';
import FracRegularWOFF from './assets/fonts/FRAC/FRAC-Regular.woff';
import FracRegularTTF from './assets/fonts/FRAC/FRAC-Regular.ttf';
import RelevantBoldWOFF2 from './assets/fonts/Relevant/Relevant-Bold.woff2';
import RelevantBoldWOFF from './assets/fonts/Relevant/Relevant-Bold.woff';
import RelevantBoldTTF from './assets/fonts/Relevant/Relevant-Bold.ttf';
import RelevantMediumWOFF2 from './assets/fonts/Relevant/Relevant-Medium.woff2';
import RelevantMediumWOFF from './assets/fonts/Relevant/Relevant-Medium.woff';
import RelevantMediumTTF from './assets/fonts/Relevant/Relevant-Medium.ttf';
import RelevantRegularWOFF2 from './assets/fonts/Relevant/Relevant-Normal.woff2';
import RelevantRegularWOFF from './assets/fonts/Relevant/Relevant-Normal.woff';
import RelevantRegularTTF from './assets/fonts/Relevant/Relevant-Normal.ttf';
import RelevantThinWOFF2 from './assets/fonts/Relevant/Relevant-Thin.woff2';
import RelevantThinWOFF from './assets/fonts/Relevant/Relevant-Thin.woff';
import RelevantThinTTF from './assets/fonts/Relevant/Relevant-Thin.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Relevant';
  src: url('${RelevantRegularWOFF2}') format('woff2'),
      url('${RelevantRegularWOFF}') format('woff'),
      url('${RelevantRegularTTF}') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Relevant-Medium';
  src: url('${RelevantMediumWOFF2}') format('woff2'),
      url('${RelevantMediumWOFF}') format('woff'),
      url('${RelevantMediumTTF}') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'FRAC-Regular';
  src: url('${FracRegularWOFF2}') format('woff2'),
      url('${FracRegularWOFF}') format('woff'),
      url('${FracRegularTTF}') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Relevant-Thin';
  src: url('${RelevantThinWOFF2}') format('woff2'),
      url('${RelevantThinWOFF}') format('woff'),
      url('${RelevantThinTTF}') format('truetype');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'FRAC-Medium';
  src: url('${FracMediumWOFF2}') format('woff2'),
      url('${FracMediumWOFF}') format('woff'),
      url('${FracMediumTTF}') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'FRAC-ExtraBold';
  src: url('${FracExtraBoldWOFF2}') format('woff2'),
      url('${FracExtraBoldWOFF}') format('woff'),
      url('${FracExtraBoldTTF}') format('truetype');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'Relevant-Bold';
  src: url('${RelevantBoldWOFF2}') format('woff2'),
      url('${RelevantBoldWOFF}') format('woff'),
      url('${RelevantBoldTTF}') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'FRAC-Bold';
  src: url('${FracBoldWOFF2}') format('woff2'),
      url('${FracBoldWOFF}') format('woff'),
      url('${FracBoldTTF}') format('truetype');
  font-weight: 600;
  font-style: normal;
}

  html,
  body {
    overflow-x: hidden;
    height: 100vh;
    font-size: 62.5%;
    background-color: transparent;
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6,p,b,a,label{
    margin:0;
    color: #ffffff;
  }
  #app {
    background-color: transparent;
    min-height: 100vh;
    width: 100vw;
    overflow-y:hidden;
  }
  h1{
    font-family:'Relevant-Medium', Helvetica, sans-serif;
    font-weight: 500;
    font-size:3.2rem;
    letter-spacing:0.15rem;
  }

  h2{
    font-family:'Relevant', Helvetica, sans-serif;
    font-weight: 400;
    font-size:2.4rem;
  }

  h4{
    font-family:'Relevant-Thin', Helvetica, sans-serif;
    font-weight: 200;
    font-size:1.4rem;
    letter-spacing:0.1rem;
  }

  h6{
    font-family:'FRAC-Regular', Helvetica, sans-serif;
      font-weight:400;
    font-size:1.8rem;

    display:inline;
  }

  p{
    font-family:'Relevant', Helvetica, sans-serif;
      font-weight: 400;
    font-size:1.4rem;
    line-height:2.0rem;
      letter-spacing:0.1rem;
  }
  label{
    font-family:'FRAC-Medium', Helvetica, sans-serif;
    font-weight: 500;
    font-size:1rem;
  }
  a:not(.active):hover{
    color:#4a94ff;
    cursor: pointer;
  }
  a:active{
    color:#FFF;
    cursor: pointer;
  }
  ::selection{
    background-color:white;
    color:white;
  }
  .disabledButton{
    opacity:0.5;
    pointer-events:none;
  }

  @media only screen and (min-width: 544px) {
    h1{
      font-size:4rem;
    }
    h2{
      font-size:2.8rem;
    }
    h4{
      font-size:1.5rem;
    }
    h6{
      font-size:1.8rem;
    }
    p{
      font-size:1.5rem;
    }
  }

  @media only screen and (min-width: 768px){
    h1{
      font-size:4.8rem;
    }
    h2{
      font-size:3.2rem;
    }
    h4{
      font-size:1.6rem;
    }
    h6{
      font-size:1.8rem;
    }
    p{
      font-size:1.6rem;
      line-height:2.4rem;
    }
  }
`;

export default GlobalStyle;
