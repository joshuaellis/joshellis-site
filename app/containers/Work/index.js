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
        </Helmet>
        {/* this is for regular mobiles & tablets */}
        <MediaQuery maxDeviceWidth={800}>
          <MobileWrapper>
            <MobileInfoPanel
              updateProject={updateProject}
              location={location}
              project={work.project}
              projectList={PROJECTS}
              message={TEXT}
            />
          </MobileWrapper>
        </MediaQuery>
        {/* this is for desktop++ */}
        <MediaQuery orientation="landscape" minDeviceWidth={900}>
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

const MobileWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 71px 4fr;
  @media (min-width: 544px) {
    padding: 10%;
  }
  @media (min-width: 768px) {
    padding: 0px 15% 15% 15%;
  }
`;

const Wrapper = styled.div`
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
