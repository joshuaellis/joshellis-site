import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const queries = {
  getProject: id => `*[slug == '${id}' && !(_id in path("drafts.**"))]`,
};

export function ProjectPage() {
  return <div></div>;
}

ProjectPage.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectPage);
