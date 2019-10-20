import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import withReduxStore from 'lib/with-redux-store';
import sanity from 'lib/client';
import buildProjectList from 'lib/buildProjectList';
import Header from 'components/Header';
import Footer from 'components/Footer';

import '../styles/styles';

const queries = {
  getProjectList: `*[_type == 'project' && !(_id in path("drafts.**"))]{ title, year, slug }`,
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const data = await sanity.fetch(queries.getProjectList);
    console.log(buildProjectList(data));
    return {
      projectList: buildProjectList(data),
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  render() {
    const { Component, pageProps, reduxStore, projectList } = this.props;
    return (
      <Provider store={reduxStore}>
        <div className="main">
          <Header projectList={projectList} />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
