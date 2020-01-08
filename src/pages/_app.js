import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import withReduxStore from 'lib/with-redux-store';
import sanity from 'lib/client';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { putProjectListDataAction } from 'store/actions/globalActions';

import '../styles/styles';

const queries = {
  getProjectList: `*[_type == 'projectStructure']{
    'projects':projects[]{
      'year':year_title,
      'projects':year_project[]->{slug, title}
    }
  }`,
  getInfoContent: `*[_type == 'aboutpage' && !(_id in path("drafts.**"))]`,
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const [projectData] = await sanity.fetch(queries.getProjectList);
    const [infoData] = await sanity.fetch(queries.getInfoContent);
    const { projects } = projectData;
    return {
      projectList: projects,
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

    let projects;
    if (projectList) {
      projects = projectList;
      reduxStore.dispatch(putProjectListDataAction(projectList));
    } else {
      projects = reduxStore.getState().global.projectList;
    }

    return (
      <Provider store={reduxStore}>
        <div className="main">
          <Header projectList={projects} infoContent={infoContent} />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
