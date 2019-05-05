import React from 'react';
import styled from 'styled-components';

const Social = () => (
  <Wrapper>
    <TextWrapper>
      <A
        rel="noopener"
        id="mail"
        target="_blank"
        href="mailto:joshua.ellis18@gmail.com"
      >
        Email
      </A>
      <A
        id="insta"
        rel="noopener"
        target="_blank"
        href="https://www.instagram.com/planet_josh/?hl=en"
      >
        Instagram
      </A>
      <A
        id="linkedIn"
        rel="noopener"
        target="_blank"
        href="https://www.linkedin.com/in/joshua-ellis-66b362114/"
      >
        LinkedIn
      </A>
      <A
        rel="noopener"
        id="github"
        target="_blank"
        href="https://github.com/joshuaellis"
      >
        Github
      </A>
    </TextWrapper>
    <ColourLayer />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 28px;
  @media (min-width: 544px) {
    height: 32px;
  }

  @media (min-width: 768px) {
    float: right;
    width: 400px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 6px 8px 3px 24px;
  margin-right: 16px;
  height: calc(100% - 4px);
  background-color: rgba(74, 148, 255, 0.2);
  @media (min-width: 544px) {
    padding: 9px 16px 3px 32px;
  }
`;

const ColourLayer = styled.div`
  background-color: rgba(49, 255, 123, 0.2);
  width: calc(100% - 16px);
  height: calc(100% - 4px);
  bottom: calc(100% - 8px);
  left: 16px;
  position: relative;
`;

const A = styled.a`
  font-family: 'FRAC-Medium', Helvetica, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  display: ${props => (props.id === 'github' ? 'none' : 'block')};
  @media (min-width: 544px) {
    display: block;
  }
`;

export default Social;
