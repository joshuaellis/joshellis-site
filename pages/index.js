import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const queries = {
  getStandfirst: `*[_type == 'homepage' && !(_id in path("drafts.**"))]{ standfirst }`,
  getAboutInfo: ``,
};

export function Home() {
  return (
    <div className="app">
      <Head>
        <title>Josh Ellis</title>
      </Head>
    </div>
  );
}

Home.propTypes = {};

Home.getInitialProps = async () => {
  return {};
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
