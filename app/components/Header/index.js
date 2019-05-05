/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Title from '../Title';
import Navigation from '../Navigation';
import DumbNavigation from '../DumbNav';

const Wrapper = styled.div`
  grid-column: 1;
  grid-row: 1 / 2;
  padding: 24px 16px 22px 16px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

const NavigationSpan = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Header = props => (
  <Wrapper>
    <Title standfirst="Creative Technologist">Josh Ellis</Title>
    <NavigationSpan>
      <Switch>
        <Route path="/about" render={() => <Navigation />} />
        <Route path="/work" render={() => <Navigation />} />
        {props.lost ? <DumbNavigation /> : null}
      </Switch>
    </NavigationSpan>
  </Wrapper>
);

Header.propTypes = {
  lost: PropTypes.bool,
};

export default Header;
