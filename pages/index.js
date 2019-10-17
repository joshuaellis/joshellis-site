import React, { useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HomeLayout from 'layouts/HomeLayout';
import SiteHeader from 'components/SiteHeader';
import Footer from 'components/Footer';

const queries = {
  getProjectList: `*[_type == 'project' && !(_id in path("drafts.**"))]{ title, client, year, slug }`,
  getStandfirst: `*[_type == 'homepage' && !(_id in path("drafts.**"))]{ standfirst }`,
  getAboutInfo: ``,
};

export function Home() {
  return (
    <div className="app">
      <Head>
        <title>Josh Ellis</title>
      </Head>
      <SiteHeader />
      <HomeLayout />
      <Footer />
    </div>
  );
}

Home.propTypes = {
  dispatchIsMobile: PropTypes.func,
};

Home.getInitialProps = async () => {
  return {};
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatchIsMobile: bool => dispatch(isMobileAction(bool)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
