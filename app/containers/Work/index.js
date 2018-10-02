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

import injectReducer from 'utils/injectReducer';
import makeSelectWork from './selectors';
import reducer from './reducer';
import {PROJECTS,TEXT} from './constants';
import {updateProjectAction } from './actions';
import styled from 'styled-components';

import WorkMenu from 'components/WorkMenu';
import InfoPanel from 'components/InfoPanel';
import ThreeScene from 'components/Three';
import ThreeBackground from 'components/ThreeBackground'
import Header from 'components/Header';
import Footer from 'components/Footer';

const Wrapper = styled.div`
  height:calc(100vh - 200px - 124px);
  width:100%;
  display:flex;
  justify-content:space-between;
  padding-right:72px;
  padding-left:34px;
  z-index:5;
  align-items:center
`;
/* eslint-disable react/prefer-stateless-function */
export class Work extends React.Component {
  render() {
    return (
      <div>
        <Helmet bodyAttributes={{style: 'background-color : transparent'}}>
          <title>Josh Ellis – Work</title>
          <meta name="description" content="Description of Work" />
        </Helmet>
        <Header dispatch={this.props.dispatch} />
        <Wrapper>
          <WorkMenu updateProjectAction={updateProjectAction} dispatch={this.props.dispatch} projects={PROJECTS} />
          <InfoPanel text={TEXT} project={this.props.work.project} showProject={this.props.work.showProject}/>
        </Wrapper>
        <ThreeBackground />
        <Footer />
      </div>
    );
  }
}

Work.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  work: makeSelectWork(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
