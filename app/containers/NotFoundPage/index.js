/* eslint-disable global-require */
/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

const FlexDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 40px 56px 80px 56px;
  @media (max-width: 779px) {
    margin: 16px 32px 20px 32px;
    flex-direction: column;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div>
        <FlexDiv>
          <MediaQuery orientation="landscape" minDeviceWidth={780}>
            <div>
              <h2>This page doesn&apos;t exist.</h2>
              <h4
                style={{
                  fontSize: '24px',
                  fontWeight: '400',
                  marginTop: '16px',
                }}
              >
                Don&apos;t worry, John is as <br />
                confused as you are.
              </h4>
            </div>
            <img
              height="320px"
              src={require('assets/images/johnTravolta.gif')}
              alt="lost travolta"
            />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={779}>
            <div>
              <h2>This page doesn&apos;t exist.</h2>
              <p style={{ marginTop: '16px' }}>
                Don&apos;t worry, John is as confused as you are. Click the
                title to go home
              </p>
            </div>
            <img
              style={{ marginTop: '32px' }}
              width="100%"
              src={require('assets/images/johnTravolta.gif')}
              alt="lost travolta"
            />
          </MediaQuery>
        </FlexDiv>
      </div>
    );
  }
}
