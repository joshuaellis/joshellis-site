import App from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';

import { CSS_GLOBAL, CSS_FONTS } from 'styles';

import withReduxStore from 'lib/with-redux-store';
import sanity from 'lib/client';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { putProjectListDataAction } from 'store/actions/globalActions';

const GlobalStyle = createGlobalStyle`
  ${CSS_FONTS}
  ${CSS_GLOBAL}
`;

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
      <React.Fragment>
        <Provider store={reduxStore}>
          <div className="main">
            <Header projectList={projects} infoContent={infoContent} />
            <Component {...pageProps} />
            <Footer />
          </div>
        </Provider>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default withReduxStore(MyApp);
