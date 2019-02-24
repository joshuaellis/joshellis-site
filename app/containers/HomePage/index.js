/**
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';

import Navigation from 'components/LargeNavigation';
import reducer from './reducer';
import makeSelectHomePage from './selectors';

const Wrapper = styled.div`
  height: calc(100vh - 200px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-height: 1440px) {
    height: calc(100vh - 440px);
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Josh Ellis</title>
          <meta
            name="description"
            content="Josh Ellis is a creative technologist based in London, he is a professional designer and freelance web developer."
          />
        </Helmet>
        <Wrapper>
          <MediaQuery minDeviceWidth={697}>
            <Navigation portrait={false} />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={696}>
            <Navigation portrait />
          </MediaQuery>
        </Wrapper>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
});

function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
