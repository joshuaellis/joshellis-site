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
  getInfoContent: `*[_type == 'aboutpage' && !(_id in path("drafts.**"))]`,
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const projectData = await sanity.fetch(queries.getProjectList);
    const [infoData] = await sanity.fetch(queries.getInfoContent);
    return {
      projectList: buildProjectList(projectData),
      infoContent: infoData,
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  render() {
    const {
      Component,
      pageProps,
      reduxStore,
      projectList,
      infoContent,
    } = this.props;
    return (
      <Provider store={reduxStore}>
        <div className="main">
          <Header projectList={projectList} infoContent={infoContent} />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
