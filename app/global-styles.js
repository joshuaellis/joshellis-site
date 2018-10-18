import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'FRAC';
    font-style:normal;
    font-weight:800;
    src:
    local('FRAC-ExtraBold')
    url(./fonts/FRAC/FRAC-extrabold.ttf);
  }

  @font-face {
    font-family: 'FRAC';
    font-style:normal;
    font-weight:600;
    src:
    local('FRAC-Bold')
    url(./fonts/FRAC/FRAC-bold.ttf);
  }

  @font-face {
    font-family: 'FRAC';
    font-style: normal;
    font-weight: 500;
    src:
    local('FRAC-Medium')
    url(./fonts/FRAC/FRAC-medium.ttf);
  }

  @font-face {
    font-family: 'FRAC';
    font-style: normal;
    font-weight: 400;
    src:
    local('FRAC-Regular')
    url(./fonts/FRAC/FRAC-regular.ttf);
  }

  @font-face {
    font-family: 'Relevant';
    font-style: normal;
    font-weight: 600;
    src:
    local('Relevant-Bold')
    url(./fonts/Relevant/Relevant-Bold.ttf);
  }
  @font-face {
    font-family: 'Relevant';
    font-style: normal;
    font-weight: 500;
    src:
    local('Relevant-Medium')
    url(./fonts/Relevant/Relevant-Medium.ttf);
  }
  @font-face {
    font-family: 'Relevant';
    font-style: normal;
    font-weight: 400;
    src:
    local('Relevant')
    url(./fonts/Relevant/Relevant-Normal.ttf);
  }
  @font-face {
    font-family: 'Relevant';
    font-style: normal;
    font-weight: 200;
    src:
    local('Relevant-Thin')
    url(./fonts/Relevant/Relevant-Thin.ttf);
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
    font-family:'Relevant-Medium', Helvetica, sans-serif;
    font-weight: 500;
    font-size:4.8rem;
    letter-spacing:0.15rem;
  }

  h2{
    font-family:'Relevant', Helvetica, sans-serif;
    font-weight: 400;
    font-size:3.2rem;
  }

  h4{
    font-family:'Relevant-Thin', Helvetica, sans-serif;
    font-weight: 200;
    font-size:1.6rem;
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
    font-size:1.6rem;
    line-height:2.4rem;
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
`;
