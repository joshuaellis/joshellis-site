/**
 *
 * Work
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import MediaQuery from 'react-responsive';

import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';

import WorkMenu from 'components/WorkMenu';
import InfoPanel from 'components/InfoPanel';
import MobileInfoPanel from 'components/MobileInfoPanel';
import {
  resetWorkAction,
  updateProjectAction,
  updateTextAction,
  setGalleryBooleanAction,
} from './actions';
import { PROJECTS, TEXT, IMAGES } from '../../content/work.content';
import reducer from './reducer';
import makeSelectWork from './selectors';
import PhotoGallery from '../../components/PhotoGallery';

/* eslint-disable react/prefer-stateless-function */
export class Work extends React.PureComponent {
  componentWillUnmount() {
    this.props.resetWork();
  }

  render() {
    const {
      location,
      work,
      updateProject,
      openGallery,
      closeGallery,
    } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>Josh Ellis – Work</title>
          <meta
            name="description"
            content="Josh Ellis is a creative technologist based in London, he is a professional designer and freelance web developer. This page displays a small collection of works that he has had the opportunity to be part of."
          />
        </Helmet>
        {/* this is for regular mobiles & tablets */}
        <MediaQuery maxDeviceWidth={696}>
          <Wrapper>
            <MobileInfoPanel
              updateProject={updateProject}
              location={location}
              project={work.project}
              projectList={PROJECTS}
              message={TEXT}
            />
          </Wrapper>
        </MediaQuery>
        {/* this is for desktop++ */}
        <MediaQuery orientation="landscape" minDeviceWidth={697}>
          <Wrapper>
            <WorkMenu updateProject={updateProject} projects={PROJECTS} />
            <InfoPanel
              text={TEXT}
              project={work.project}
              showProject={work.showProject}
              openGallery={openGallery}
            />
          </Wrapper>
        </MediaQuery>
        {/* this is for landscape tablets */}
        <MediaQuery orientation="portrait" minDeviceWidth={697}>
          <Wrapper style={{ position: 'relative', bottom: '32px' }}>
            <MobileInfoPanel
              updateProject={updateProject}
              location={location}
              project={work.project}
              projectList={PROJECTS}
              message={TEXT}
            />
          </Wrapper>
        </MediaQuery>
        {work.showGallery && IMAGES[work.project] ? (
          <PhotoGallery
            imgArr={IMAGES[work.project]}
            closeGallery={closeGallery}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  height: calc(100vh - 200px - 124px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 72px;
  padding-left: 34px;
  z-index: 5;
  align-items: center;
  @media (min-height: 1440px) {
    height: calc(100vh - 680px);
  }
  @media (max-width: 1059px) {
    padding-top: 64px;
    padding-right: 56px;
  }

  @media (max-width: 640px) {
    height: 100%;
    width: 100%;
    display: block;
    padding: 0px 32px 0px 16px;
  }
`;

Work.propTypes = {
  work: PropTypes.object,
  resetWork: PropTypes.func,
  updateProject: PropTypes.func,
  location: PropTypes.object,
  openGallery: PropTypes.func,
  closeGallery: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  work: makeSelectWork(),
});

function mapDispatchToProps(dispatch) {
  return {
    resetWork: () => dispatch(resetWorkAction()),
    updateProject: (project, bool) =>
      dispatch(updateProjectAction(project, bool)),
    updateText: text => dispatch(updateTextAction(text)),
    openGallery: () => dispatch(setGalleryBooleanAction(true)),
    closeGallery: () => dispatch(setGalleryBooleanAction(false)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'work', reducer });

export default compose(
  withReducer,
  withConnect,
)(Work);
