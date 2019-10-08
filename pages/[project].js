import React, { useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProjectHeader from 'components/ProjectHeader';
import Footer from 'components/Footer';
import ImageModal from 'components/ImageModal';

import {
  setProjectAction,
  openModalAction,
} from '../store/actions/project-actions';
import { isMobileAction } from '../store/actions/home-actions';

export function ProjectPage(props) {
  const {
    location,
    dispatchSetProject,
    dispatchOpenModal,
    dispatchIsMobile,
    projectPage,
  } = props;

  const project = location.pathname.replace('/', '').replace(/-/g, ' ');
  let title = project;

  if (window.innerWidth < 480) {
    title = MOBILE_TITLES[title];
  }

  const widthChecker = () =>
    window.innerWidth <= 768 ? dispatchIsMobile(true) : dispatchIsMobile(false);

  useEffect(() => {
    dispatchSetProject(title);
    window.scrollTo(0, 0);
    widthChecker();
    window.addEventListener('resize', widthChecker);
    return () => {
      window.removeEventListener('resize', widthChecker, true);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{`${project} – Josh Ellis`}</title>
        <meta
          name="description"
          content={`${
            CONTENT[project][0] ? CONTENT[project][0].content : null
          }`}
        />
      </Head>
      <ProjectHeader projectList={PROJECTS} projectTitle={title} />
      <ProjectLayout />
      <Footer project />
      {projectPage.isMobile && projectPage.modalOpen ? (
        <ImageModal
          image={projectPage.imageModalObject}
          selectedID={projectPage.carouselId}
          onClose={dispatchOpenModal}
        />
      ) : null}
    </React.Fragment>
  );
}

ProjectPage.propTypes = {
  location: PropTypes.object,
  dispatchSetProject: PropTypes.func,
  dispatchIsMobile: PropTypes.func,
  dispatchOpenModal: PropTypes.func,
  projectPage: PropTypes.object,
};

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
  dispatchSetProject: project => dispatch(setProjectAction(project)),
  dispatchIsMobile: bool => dispatch(isMobileAction(bool)),
  dispatchOpenModal: (bool, item, id) =>
    dispatch(openModalAction(bool, item, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectPage);
