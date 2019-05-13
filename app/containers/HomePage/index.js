/**
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectReducer } from 'utils/injectReducer';
import SiteHeader from 'components/SiteHeader';
import Footer from 'components/Footer';
import makeSelectHomePage, { makeSelectProjectPage } from './selectors';
import reducer from './reducer';

import Standfirst from '../../components/Standfirst';
import NavMenu from '../../components/NavMenu';

import { PROJECTS } from '../../constants';

export function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });
  return (
    <React.Fragment>
      <Helmet>
        <title>Josh Ellis</title>
        <meta
          name="description"
          content="Josh Ellis is a creative technologist based in London, he is a professional designer and freelance web developer. He is always interested in a new challenge and enjoys utilising new technologies despite the learning curves."
        />
      </Helmet>
      <SiteHeader />
      <HomepageWrapper>
        <Standfirst />
        <NavMenu projects={PROJECTS} />
      </HomepageWrapper>
      <Footer />
    </React.Fragment>
  );
}

HomePage.propTypes = {};

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
  projectPage: makeSelectProjectPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
