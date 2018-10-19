import { injectGlobal } from 'styled-components';

import FracExtraBold from './fonts/FRAC/FRAC-extrabold.ttf';
import FracBold from './fonts/FRAC/FRAC-bold.ttf';
import FracMedium from './fonts/FRAC/FRAC-medium.ttf';
import FracRegular from './fonts/FRAC/FRAC-regular.ttf';
import RelevantBold from './fonts/Relevant/Relevant-Bold.ttf';
import RelevantMedium from './fonts/Relevant/Relevant-Medium.ttf';
import RelevantRegular from './fonts/Relevant/Relevant-Normal.ttf';
import RelevantThin from './fonts/Relevant/Relevant-Thin.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'FRAC';
    font-style:normal;
    font-weight:800;
    src:
    local('FRAC-ExtraBold')
    url('${FracExtraBold}');
  }

  @font-face {
    font-family: 'FRAC';
    font-style:normal;
    font-weight:600;
    src:
    local('FRAC-Bold')
    url('${FracBold}');
  }

  @font-face {
    font-family: 'FRAC';
    font-style: normal;
    font-weight: 500;
    src:
    local('FRAC-Medium')
    url('${FracMedium}');
  }

  @font-face {
    font-family: 'FRAC';
    font-style: normal;
    font-weight: 400;
    src:
    local('FRAC-Regular')
    url('${FracRegular}');
  }

  @font-face {
    font-family: 'Relevant';
    font-style: normal;
    font-weight: 600;
    src:
    local('Relevant-Bold')
    url('${RelevantBold}');
  }
  @font-face {
    font-family: 'Relevant';
    font-style: normal;
    font-weight: 500;
    src:
    local('Relevant-Medium')
    url('${RelevantMedium}');
  }
  @font-face {
    font-family: 'Relevant';
    font-style: normal;
    font-weight: 400;
    src:
    local('Relevant')
    url('${RelevantRegular}');
  }
  @font-face {
    font-family: 'Relevant';
    font-style: normal;
    font-weight: 200;
    src:
    local('Relevant-Thin')
    url('${RelevantThin}');
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
  ::selection{
    background-color:white;
    color:white;
  }
`;
