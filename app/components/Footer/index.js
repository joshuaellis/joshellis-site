/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PALETTE } from '../../constants';

function Footer() {
  return (
    <Wrapper>
      <SocialAnchor
        className="blue"
        rel="noopener"
        target="_blank"
        href="mailto:joshua.ellis18@gmail.com?Subject=Hello%20there"
      >
        Contact me
      </SocialAnchor>
      <SocialAnchor
        className="red"
        rel="noopener"
        target="_blank"
        href="https://www.instagram.com/planet_josh"
      >
        Stalk me
      </SocialAnchor>
      <SocialAnchor
        className="orange"
        rel="noopener"
        target="_blank"
        href="https://github.com/joshuaellis"
      >
        Judge my code
      </SocialAnchor>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: ${PALETTE.footerBackground};
  padding: 16px 50% 24px 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 24px 32px 32px 32px;
    margin-top: 40px;
  }
  @media (min-width: 1280px) {
    padding-left: 56px;
    padding-right: 56px;
    margin-top: 80px;
  }
`;

const SocialAnchor = styled.a`
  &.blue {
    text-decoration-color: ${PALETTE.blue};
  }
  &.red {
    text-decoration-color: ${PALETTE.red};
  }
  &.orange {
    text-decoration-color: ${PALETTE.orange};
  }
  @media (min-width: 768px) {
    margin-right: 40px;
  }
  @media (min-width: 1280px) {
    text-decoration-style: double;
  }
  &:hover {
    text-decoration-style: wavy;
  }
`;

Footer.propTypes = {};

export default memo(Footer);
