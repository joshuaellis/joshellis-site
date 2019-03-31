/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Title from '../Title';
import Navigation from '../Navigation';
import DumbNavigation from '../DumbNav';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 56px 32px 56px;
  @media (min-height: 1440px) {
    margin-top: 192px;
  }
  @media (max-width: 696px) {
    padding: 24px 32px 56px 16px;
  }
  @media (max-width: 600px) {
    padding-bottom: 40px;
  }
`;

const Header = React.memo(props => (
  <React.Fragment>
    <MediaQuery maxDeviceWidth={696}>
      <Wrapper>
        <Title standfirst="Creative Technologist">Josh Ellis</Title>
      </Wrapper>
    </MediaQuery>
    <MediaQuery minDeviceWidth={697}>
      <Wrapper>
        <Title standfirst="Creative Technologist">Josh Ellis</Title>
        <Switch>
          <Route path="/about" render={() => <Navigation />} />
          <Route path="/work" render={() => <Navigation />} />
          {props.lost ? <DumbNavigation /> : null}
        </Switch>
      </Wrapper>
    </MediaQuery>
  </React.Fragment>
));

export default Header;
