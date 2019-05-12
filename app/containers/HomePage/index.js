/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectReducer } from 'utils/injectReducer';
import SiteHeader from 'components/SiteHeader';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import { SET_PROJECT_ACTION } from './actions';

import Standfirst from '../../components/Standfirst';
import NavMenu from '../../components/NavMenu';

import { PROJECTS } from '../../constants';

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  const { dispatchSetProject } = props;
  return (
    <React.Fragment>
      <SiteHeader />
      <HomepageWrapper>
        <Standfirst />
        <NavMenu projects={PROJECTS} onClick={dispatchSetProject} />
      </HomepageWrapper>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  dispatchSetProject: PropTypes.func,
};

const HomepageWrapper = styled.div`
  padding-top: 144px;
  @media (min-width: 768px) {
    padding-top: 208px;
  }
  @media (min-width: 1280px) {
    padding-top: 256px;
  }
`;
const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetProject: () => dispatch(SET_PROJECT_ACTION),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
