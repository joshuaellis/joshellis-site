/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LargeNavigation = () => (
  <Wrapper>
    <Link to="/about">About</Link>
    <H2>Experiments</H2>
    <Link to="/work">Work</Link>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 120px;
  }
  @media (min-width: 1024px) {
    padding: 40px 20vw;
  }
`;

const H2 = styled.h2`
  opacity: 0.5;
  margin-bottom: 20%;
`;

const Link = styled(NavLink)`
  font-family: 'Relevant', Helvetica, sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  text-decoration: none;
  letter-spacing: 0.05rem;
  display: inline-block;
  margin-bottom: 20%;
  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
  @media (min-width: 1920px) {
    font-size: 4rem;
  }
`;

export default LargeNavigation;
