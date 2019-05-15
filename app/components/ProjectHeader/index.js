/**
 *
 * ProjectHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Dropdown from '../Dropdown';

import { PALETTE } from '../../constants';

function ProjectHeader(props) {
  return (
    <Wrapper>
      <SVGButton to="/">
        <svg viewBox="0 0 32 32">
          <g transform="translate(32 32) rotate(180)">
            <path
              d="M30.1,14.783l-.9-.9L21.061,5.747a1.5,1.5,0,1,0-2.122,2.121L25.571,14.5H3.5a1.5,1.5,0,0,0,0,3H25.571l-6.632,6.632a1.5,1.5,0,0,0,2.122,2.121l8.131-8.132.9-.9A1.72,1.72,0,0,0,30.1,14.783Z"
              fill="#fdfdfd"
            />
            <rect width="32" height="32" fill="none" />
          </g>
        </svg>
      </SVGButton>
      <Dropdown title={props.projectTitle} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${PALETTE.black};
  padding: 14px 16px;
  position: fixed;
  top: 0px;
  height: 64px;
  z-index: 10;
  @media (min-width: 768px) {
    height: 72px;
    padding: 16px 32px;
  }

  @media (min-width: 1280px) {
    height: 88px;
    padding: 22px 40px;
  }
`;

const SVGButton = styled(Link)`
  height: 32px;
  width: 32px;
  margin-right: 16px;
  position: absolute;
  top: 16px;
  @media (min-width: 768px) {
    top: 20px;
  }
  @media (min-width: 1280px) {
    height: 40px;
    width: 40px;
    top: 24px;
  }
`;

ProjectHeader.propTypes = {
  projectTitle: PropTypes.string,
};

export default ProjectHeader;
