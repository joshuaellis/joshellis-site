/**
 *
 * Project
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import ProjectHeader from 'components/ProjectHeader';

// import { CONTENT } from '../../constants';

export function ProjectPage(props) {
  const title = props.location.pathname.replace('/', '');
  return (
    <React.Fragment>
      <Helmet>
        <title>title</title>
        <meta name="description" content="Description of Project" />
      </Helmet>
      <ProjectHeader projectTitle={title} />
    </React.Fragment>
  );
}

ProjectPage.propTypes = {
  location: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ProjectPage);
