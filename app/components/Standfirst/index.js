/**
 *
 * Standfirst
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PALETTE } from '../../constants';

function Standfirst() {
  return (
    <React.Fragment>
      <StandfirstWrapper>
        <h2>
          I&apos;m a <span className="blue">designer</span> at Applied Works
        </h2>
        <h2>
          I&apos;m a freelance <span className="red">developer</span>
        </h2>
        <h2>
          I ran a project with <span className="orange">MA UX</span> design at
          LCC
        </h2>
        <h2>
          I&apos;ve been featured in{' '}
          <span className="green">Creative Review</span>
        </h2>
      </StandfirstWrapper>
      <StickyHead>
        <h2>Here&apos;s my work –</h2>
      </StickyHead>
    </React.Fragment>
  );
}

Standfirst.propTypes = {};

const StandfirstWrapper = styled.div`
  background-color: ${PALETTE.black};
  padding: 8px 16px 8px 16px;
  h2 {
    margin-bottom: 24px;
  }
  h2:last-child {
    margin-bottom: 8px;
  }
  @media (min-width: 768px) {
    padding: 16px 32px 8px 32px;
    h2 {
      margin-bottom: 32px;
    }
    h2:last-child {
      margin-bottom: 16px;
    }
  }
  @media (min-width: 1280px) {
    padding: 0px 56px 8px 56px;
  }
`;

const StickyHead = styled.div`
  background-color: ${PALETTE.black};
  padding: 8px 16px 16px 16px;
  @media (min-width: 768px) {
    padding: 8px 32px 32px 32px;
  }
  @media (min-width: 1280px) {
    padding: 8px 56px 32px 56px;
  }
`;

export default memo(Standfirst);
