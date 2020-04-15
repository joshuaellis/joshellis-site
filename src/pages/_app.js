import App from 'next/app'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'

import { CSS_GLOBAL, CSS_FONTS } from 'styles'

import withReduxStore from 'hooks/withReduxStore'
import sanity from 'lib/client'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { putProjectListDataAction } from 'store/actions/globalActions'

const GlobalStyle = createGlobalStyle`
  ${CSS_FONTS}
  ${CSS_GLOBAL}
`

const queries = {
  getProjectList: `*[_type == 'projectStructure']{
    'projects':projects[]{
      'year':year_title,
      'projects':year_project[]->{slug, title}
    }
  }`,
  getInfoContent: '*[_type == \'aboutpage\' && !(_id in path("drafts.**"))]'
}

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const [projectData] = await sanity.fetch(queries.getProjectList)
    const [infoData] = await sanity.fetch(queries.getInfoContent)
    const { projects } = projectData
    return {
      projectList: projects,
      infoContent: infoData,
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }

  render () {
    const {
      Component,
      pageProps,
      reduxStore,
      projectList,
      infoContent
    } = this.props

    let projects
    if (projectList) {
      projects = projectList
      reduxStore.dispatch(putProjectListDataAction(projectList))
    } else {
      projects = reduxStore.getState().global.projectList
    }

    return (
      <>
        <GlobalStyle />
        <Provider store={reduxStore}>
          <AppMain>
            <Header projectList={projects} infoContent={infoContent} />
            <Component {...pageProps} />
            <Footer />
          </AppMain>
        </Provider>
      </>
    )
  }
}

const AppMain = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  & > *:nth-child(2) {
    flex: 1 0 auto;
  }

  & > footer {
    flex-shrink: 0;
  }
`

export default withReduxStore(MyApp)
