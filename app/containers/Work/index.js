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
        <MediaQuery maxWidth={1023}>
          <MobileWrapper>
            <MobileInfoPanel
              updateProject={updateProject}
              location={location}
              project={work.project}
              projectList={PROJECTS}
              message={TEXT}
              openGallery={openGallery}
              imgArr={IMAGES[work.project]}
            />
          </MobileWrapper>
        </MediaQuery>
        {/* this is for desktop++ */}
        <MediaQuery minWidth={1024}>
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
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 4fr;
  @media (min-width: 1280px) {
    padding: 12px 0px;
  }
  @media (min-width: 1920px) {
    padding: 24px 0px;
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
