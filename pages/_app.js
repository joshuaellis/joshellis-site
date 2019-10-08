import App from 'next/app';
import Router from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';

import withReduxStore from '../lib/with-redux-store';
import * as gtag from '../lib/g-analytics';

import '../styles/styles';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default withReduxStore(MyApp);
