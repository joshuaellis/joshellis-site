/**
 *
 * Work
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import MediaQuery from 'react-responsive'

import injectReducer from 'utils/injectReducer'
import makeSelectWork from './selectors'
import reducer from './reducer'
import { PROJECTS, TEXT } from './constants'
import { updateProjectAction } from './actions'
import styled from 'styled-components'

import WorkMenu from 'components/WorkMenu'
import InfoPanel from 'components/InfoPanel'
import Header from 'components/Header'
import Footer from 'components/Footer'
import MobileInfoPanel from 'components/MobileInfoPanel'

const Wrapper = styled.div`
  height:calc(100vh - 200px - 124px);
  width:100%;
  display:flex;
  justify-content:space-between;
  padding-right:72px;
  padding-left:34px;
  z-index:5;
  align-items:center;
  @media (min-height:1440px){
    height:calc(100vh - 680px);
  }
  @media (max-width: 1059px){
    padding-top:64px;
    padding-right:56px;
  };

  @media (max-width: 640px){
    height:100%;
    width:100%;
    display:block;
    padding: 0px 32px 0px 16px;
  }
`
/* eslint-disable react/prefer-stateless-function */
export class Work extends React.Component {
  render () {
    return (
      <div>
        <Helmet>
          <title>Josh Ellis – Work</title>
          <meta name="description" content="Josh Ellis is a creative technologist based in London, he is a professional designer and freelance web developer. This page displays a small collection of works that he has had the opportunity to be part of." />
        </Helmet>
        <Header dispatch={this.props.dispatch} />
        <MediaQuery maxDeviceWidth={696}>
          <Wrapper>
            <MobileInfoPanel updateProjectAction={updateProjectAction} location={this.props.location} dispatch={this.props.dispatch} project={this.props.work.project} projectList={PROJECTS} message={TEXT} />
          </Wrapper>
        </MediaQuery>
        <MediaQuery orientation={'landscape'} minDeviceWidth={697}>
          <Wrapper>
            <WorkMenu updateProjectAction={updateProjectAction} dispatch={this.props.dispatch} projects={PROJECTS} />
            <InfoPanel text={TEXT} project={this.props.work.project} showProject={this.props.work.showProject}/>
          </Wrapper>
        </MediaQuery>
        <MediaQuery orientation={'portrait'} minDeviceWidth={697}>
          <Wrapper style={{ position: 'relative', bottom: '32px' }}>
            <MobileInfoPanel updateProjectAction={updateProjectAction} location={this.props.location} dispatch={this.props.dispatch} project={this.props.work.project} projectList={PROJECTS} message={TEXT} />
          </Wrapper>
        </MediaQuery>
        <Footer />
      </div>
    )
  }
}

Work.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  work: makeSelectWork()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: 'work', reducer })

export default compose(
  withReducer,
  withConnect
)(Work)
