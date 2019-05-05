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
// import styled from 'styled-components';
// import { CSSTransition } from 'react-transition-group';

import Navigation from 'components/LargeNavigation';
import reducer from './reducer';
import makeSelectHomePage from './selectors';

import './style.css';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  render() {
    return (
      <div className="homePageWrapper">
        <Navigation portrait />
      </div>
    );
  }
}

// const Wrapper = styled.div`
//   grid-columns: 1;
//   grid-row: 2 / 3;
//   @media (min-width: 768px) {
//   }
//   @media (min-height: 1440px) {
//     height: calc(100vh - 440px);
//   }
// `;

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
