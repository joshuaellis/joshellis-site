/**
 *
 * Dropdown
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Dropdown(props) {
  return (
    <Wrapper>
      <h2>{props.title}</h2>
      {/* <SVGButton type="button">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g transform="translate(34 112) rotate(-90)">
            <rect width="24" height="24" fill="none" />
            <path
              d="M96.929-22l8.132-8.132a1.5,1.5,0,0,0,0-2.121h0a1.5,1.5,0,0,0-2.122,0l-8.131,8.132-.9.9a1.72,1.72,0,0,0,0,2.434l.9.9,8.131,8.132a1.5,1.5,0,0,0,2.122,0h0a1.5,1.5,0,0,0,0-2.121Z"
              fill="#fdfdfd"
            />
          </g>
        </svg>
  </SVGButton> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: 1280px) {
    justify-content: flex-start;
    margin-left: 74px;
  }
`;

// const SVGButton = styled.button`
//   margin-left: 16px;
//   border: none;
//   padding: 0px;
//   background-color: transparent;
// `;

Dropdown.propTypes = {
  title: PropTypes.string,
};

export default Dropdown;
