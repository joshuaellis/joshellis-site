/**
 *
 * Standfirst
 *
 */

import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PALETTE } from '../../constants';

function Standfirst() {
  const [isFixed, setIsFixed] = useState(false);
  const container = useRef(null);
  const placeholder = useRef(null);
  const listenToScroll = useCallback(() => {
    let val = 144;
    if (window.innerWidth < 1280 && window.innerWidth >= 768) {
      val = 208;
    }
    if (window.innerWidth >= 1280) {
      val = 246;
    }
    const subHeaderPosition =
      placeholder.current &&
      placeholder.current.getBoundingClientRect().top + window.pageYOffset;
    const rect = container.current.getBoundingClientRect();
    if (rect.top <= val && !isFixed) {
      setIsFixed(true);
    } else if (window.pageYOffset < subHeaderPosition - val && isFixed) {
      setIsFixed(false);
    }
  }, [isFixed]);
  useEffect(() => {
    document.addEventListener('scroll', listenToScroll);
    return () => {
      document.removeEventListener('scroll', listenToScroll);
    };
  }, [isFixed, listenToScroll]);
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
      {isFixed && <Placeholder ref={placeholder} />}
      <StickyHead isFixed={isFixed} ref={container}>
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
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'normal')};
  top: ${({ isFixed }) => (isFixed ? '144px' : '0px')};
  z-index: 10;
  width: 100%;
  @media (min-width: 768px) {
    padding: 8px 32px 32px 32px;
    top: ${({ isFixed }) => (isFixed ? '208px' : '0px')};
  }
  @media (min-width: 1280px) {
    padding: 8px 56px 32px 56px;
    top: ${({ isFixed }) => (isFixed ? '246px' : '0px')};
  }
`;

const Placeholder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
  padding: 20px 0;
  height: 60px;
  @media (min-width: 768px) {
    height: 76px;
  }
  @media (min-width: 1280px) {
    height: 80px;
  }
`;

export default memo(Standfirst);
