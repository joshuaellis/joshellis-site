import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  margin-left: inherit;
  text-decoration: none;
  letter-spacing: inherit;
`;
const TextWrapper = styled.div`
  background-color: rgba(74, 148, 255, 0.2);
  text-align: left;
  padding: 16px 24px 24px 32px;
  width: 100%;
  position: relative;
  z-index: 10;
  height: 100%;

  @media (max-width: 400px) {
    padding: 12px 24px 0px 24px;
  }
`;
const ColourLayer = styled.div`
  background-color: rgba(49, 255, 123, 0.2);
  width: 100%;
  height: 100%;
  position: relative;
  bottom: calc(100% - 16px);
  left: 16px;
  z-index: 1;

  @media (max-width: 400px) {
    bottom: 64px;
  }
`;
const Wrapper = styled.div`
  width: 360px;
  float: left;
  height: 128px;
  @media (max-width: 1059px) {
  }
  @media (max-width: 696px) {
    width: 100%;
    height: 96px;
  }
  @media (max-width: 400px) {
    height: 80px;
  }
`;

function Title(props) {
  return (
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
}

Title.propTypes = {
  standfirst: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Title;
