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
import MediaQuery from 'react-responsive';

import injectReducer from 'utils/injectReducer';
import Window from 'components/Window';
import styled from 'styled-components';
import MobileInfoPanel from 'components/MobileInfoPanel';
import Ralph from 'assets/images/ralph.gif';
import makeSelectAbout from './selectors';
import reducer from './reducer';
import { closeWindow, openWindow } from './actions';

import { messages } from '../../content/about.content';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 72px;
  @media (min-height: 1440px) {
    padding-top: 176px;
  }
  @media (max-height: 780px) {
    padding-top: 32px;
  }
  @media (max-width: 640px) {
    display: block;
    padding: 0px 32px 0px 16px;
  }
`;

const Img = styled.img`
  position: fixed;
  z-index: 0;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const P = styled.h6`
  display: inline;
  font-size: 1.6rem;
`;

const A = styled.a`
  font-family: 'Relevant';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.1rem;
  margin-right: 8px;
`;

/* eslint-disable react/prefer-stateless-function */
export class About extends React.Component {
  componentWillUnmount() {
    if (!this.props.about.windowShowing) {
      this.props.dispatchOpen();
    }
  }

  render() {
    const { dispatchClose, about, location } = this.props;
    const messageKeys = Object.keys(messages.windowCopy);
    return (
      <div>
        <Helmet>
          <title>Josh Ellis – About</title>
          <meta
            name="description"
            content={messages.windowCopy['Background information:']}
          />
        </Helmet>
        <MediaQuery maxDeviceWidth={696}>
          <Wrapper>
            <MobileInfoPanel
              location={location}
              message={messages.mobileCopy}
            />
          </Wrapper>
        </MediaQuery>
        <MediaQuery minDeviceWidth={697}>
          <Wrapper>
            {about.windowShowing === true ? (
              <Window
                closeWindow={dispatchClose}
                title={messages.windowHeader.header}
              >
                {messageKeys.map(key => {
                  if (key !== 'mentions_url') {
                    if (key === 'Notable mentions: ') {
                      return (
                        <div
                          style={{ marginBottom: '4px' }}
                          key={`message no.${key}`}
                        >
                          <P>{key}</P>
                          {messages.windowCopy[key].map((x, index) => (
                            <A
                              as="a"
                              // eslint-disable-next-line react/no-array-index-key
                              key={`mention link ${index}`}
                              target="_blank"
                              href={messages.windowCopy.mentions_url[index]}
                              style={{ display: 'inline' }}
                              rel="noopener"
                            >
                              {x}
                            </A>
                          ))}
                        </div>
                      );
                    }
                    return (
                      <div
                        style={{ marginBottom: '4px' }}
                        key={`message no.${key}`}
                      >
                        <P>{key}</P>
                        <p style={{ display: 'inline' }}>
                          {messages.windowCopy[key]}
                        </p>
                      </div>
                    );
                  }
                  return null;
                })}
              </Window>
            ) : null}
          </Wrapper>
          <Img src={Ralph} width="240px" alt="little ralphie wiggum" />
        </MediaQuery>
      </div>
    );
  }
}

About.propTypes = {
  dispatchClose: PropTypes.func,
  location: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  dispatchOpen: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  about: makeSelectAbout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchClose: () => dispatch(closeWindow()),
    dispatchOpen: () => dispatch(openWindow()),
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
