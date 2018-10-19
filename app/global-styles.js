import { injectGlobal } from 'styled-components'

import FracExtraBoldWOFF2 from './fonts/FRAC/FRAC-ExtraBold.woff2'
import FracExtraBoldWOFF from './fonts/FRAC/FRAC-ExtraBold.woff'
import FracExtraBoldTTF from './fonts/FRAC/FRAC-ExtraBold.ttf'
import FracBoldWOFF2 from './fonts/FRAC/FRAC-Bold.woff2'
import FracBoldWOFF from './fonts/FRAC/FRAC-Bold.woff'
import FracBoldTTF from './fonts/FRAC/FRAC-Bold.ttf'
import FracMediumWOFF2 from './fonts/FRAC/FRAC-Medium.woff2'
import FracMediumWOFF from './fonts/FRAC/FRAC-Medium.woff'
import FracMediumTTF from './fonts/FRAC/FRAC-Medium.ttf'
import FracRegularWOFF2 from './fonts/FRAC/FRAC-Regular.woff2'
import FracRegularWOFF from './fonts/FRAC/FRAC-Regular.woff'
import FracRegularTTF from './fonts/FRAC/FRAC-Regular.ttf'
import RelevantBoldWOFF2 from './fonts/Relevant/Relevant-Bold.woff2'
import RelevantBoldWOFF from './fonts/Relevant/Relevant-Bold.woff'
import RelevantBoldTTF from './fonts/Relevant/Relevant-Bold.ttf'
import RelevantMediumWOFF2 from './fonts/Relevant/Relevant-Medium.woff2'
import RelevantMediumWOFF from './fonts/Relevant/Relevant-Medium.woff'
import RelevantMediumTTF from './fonts/Relevant/Relevant-Medium.ttf'
import RelevantRegularWOFF2 from './fonts/Relevant/Relevant-Normal.woff2'
import RelevantRegularWOFF from './fonts/Relevant/Relevant-Normal.woff'
import RelevantRegularTTF from './fonts/Relevant/Relevant-Normal.ttf'
import RelevantThinWOFF2 from './fonts/Relevant/Relevant-Thin.woff2'
import RelevantThinWOFF from './fonts/Relevant/Relevant-Thin.woff'
import RelevantThinTTF from './fonts/Relevant/Relevant-Thin.ttf'

/* eslint no-unused-expressions: 0 */
injectGlobal`
@font-face {
  font-family: 'Relevant-Normal';
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
    height: 100%;
    width: 100%;
    font-size: 62.5%;
    background-color: transparent;
  }
  h1,h2,h3,h4,h5,h6,p,b,a,label{
    margin:0;
    color: #ffffff;
  }
  #app {
    background-color: transparent;
    min-height: 100%;
    min-width: 100%;
  }

  h1{
    font-family:'Relevant-Medium';
    font-weight: 500;
    font-size:4.8rem;
    letter-spacing:0.15rem;
  }

  h2{
    font-family:'Relevant';
    font-weight: 400;
    font-size:3.2rem;
  }

  h4{
    font-family:'Relevant-Thin';
    font-weight: 200;
    font-size:1.6rem;
    letter-spacing:0.1rem;
  }

  h6{
    font-family:'FRAC-Regular';
    font-weight:400;
    font-size:1.8rem;
    display:inline;
  }

  p{
    font-family:'Relevant';
    font-weight: 400;
    font-size:1.6rem;
    line-height:2.4rem;
    letter-spacing:0.1rem;
  }
  label{
    font-family:'FRAC-Medium';
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
  @media only screen and (max-width: 696px){
    h1{
      font-size:3.2rem;
    }
  
    h2{
      font-size:2.4rem;
    }
  
    h4{
      font-size:1.4rem;
    }
  
    h6{
      font-size:1.8rem;
    }
  
    p{
      font-size:1.4rem;
    }
  }
`
