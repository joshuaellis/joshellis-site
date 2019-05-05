import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Title = props => (
  <Wrapper>
    <TextWrapper>
      <h1>
        <Link exact to="/" activeStyle={{ pointerEvents: 'none' }}>
          {props.children}
        </Link>
      </h1>
      <h4>{props.standfirst}</h4>
    </TextWrapper>
    <ColourLayer />
  </Wrapper>
);

const Link = styled(NavLink)`
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  margin-left: inherit;
  text-decoration: none;
  letter-spacing: inherit;
`;
const Wrapper = styled.div`
  height: 96px;
  width: 100%;
  @media (min-width: 544px) {
    height: 120px;
  }
  @media (min-width: 768px) {
    height: 140px;
    width: 360px;
    float: left;
  }
  @media (min-width: 1920px) {
    height: 184px;
    width: 440px;
  }
`;
const TextWrapper = styled.div`
  background-color: rgba(74, 148, 255, 0.2);
  text-align: left;
  z-index: 10;
  padding: 12px 24px 0px 24px;
  margin-right: 16px;
  margin-bottom: 16px;
  position: relative;
  height: calc(100% - 16px);
  @media (min-width: 544px) {
    padding: 12px 32px 0px 32px;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
const ColourLayer = styled.div`
  background-color: rgba(49, 255, 123, 0.2);
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  z-index: 1;
  position: relative;
  bottom: calc(100% - 16px);
  left: 16px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

Title.propTypes = {
  standfirst: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Title;
