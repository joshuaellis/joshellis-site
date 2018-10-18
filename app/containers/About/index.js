/**
 *
 * About
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectAbout from './selectors';
import reducer from './reducer';

import messages from './messages';
import Window from 'components/Window';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Ralph from 'images/ralph.gif';

const Wrapper = styled.div`
  height:calc(100vh - 200px);
  width:100%;
  display:flex;
  justify-content:center;
  align-items:flex-start;
  padding-top:72px;
`;

const Img = styled.img`
  position:fixed;
  z-index:0;
  background-color:white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

/* eslint-disable react/prefer-stateless-function */
export class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Josh Ellis – About</title>
          <meta name="description" content={messages.windowCopy['Background information:']} />
        </Helmet>
        <Header dispatch={this.props.dispatch} />
        <Wrapper>
          {this.props.about.windowShowing == true ? (<Window dispatch={this.props.dispatch} title={messages.windowHeader.header} message={messages.windowCopy} />) : null }
        </Wrapper>
          {this.props.about.windowShowing == false? (<Img src={Ralph} width='240px' alt="little ralphie wiggum"/>) : null }
        <Footer />
      </div>
    );
  }
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  about: makeSelectAbout(),
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

const withReducer = injectReducer({ key: 'about', reducer });

export default compose(
  withReducer,
  withConnect,
)(About);