import React, { useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HomeLayout from 'layouts/HomeLayout';
import SiteHeader from 'components/SiteHeader';
import Footer from 'components/Footer';

import { isMobileAction } from '../store/actions/home-actions';

export function Home(props) {
  const widthChecker = () =>
    window.innerWidth <= 768
      ? props.dispatchIsMobile(true)
      : props.dispatchIsMobile(false);

  useEffect(() => {
    widthChecker();
    window.addEventListener('resize', widthChecker);
    return () => {
      window.removeEventListener('resize', widthChecker, true);
    };
  }, []);

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
