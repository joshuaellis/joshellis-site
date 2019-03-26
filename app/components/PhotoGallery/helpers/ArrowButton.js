import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ArrowButton(props) {
  const Button = styled.button`
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 16px;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }

    @media screen and (min-device-width: 1100px) and (-webkit-min-device-pixel-ratio: 2) {
      opacity: 0;
      transition: opacity 1s;
    }
  `;
  return (
    <React.Fragment>
      <Button id="left-arrow" onClick={props.handleBackwardClick}>
        <svg
          style={{
            fill: 'rgba(255,255,255,0.5)',
            transform: 'rotate(180deg)',
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g>
            <rect width="24" height="24" style={{ fill: 'none' }} />
            <path d="M15.07,12,6.94,20.13a1.49,1.49,0,0,0,0,2.12h0a1.49,1.49,0,0,0,2.12,0l8.13-8.13.91-.9a1.73,1.73,0,0,0,0-2.44l-.91-.9L9.06,1.75a1.49,1.49,0,0,0-2.12,0h0a1.49,1.49,0,0,0,0,2.12Z" />
          </g>
        </svg>
      </Button>
      <Button id="right-arrow" onClick={props.handleForwardClick}>
        <svg
          style={{ fill: 'rgba(255,255,255,0.5)' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g>
            <rect width="24" height="24" style={{ fill: 'none' }} />
            <path d="M15.07,12,6.94,20.13a1.49,1.49,0,0,0,0,2.12h0a1.49,1.49,0,0,0,2.12,0l8.13-8.13.91-.9a1.73,1.73,0,0,0,0-2.44l-.91-.9L9.06,1.75a1.49,1.49,0,0,0-2.12,0h0a1.49,1.49,0,0,0,0,2.12Z" />
          </g>
        </svg>
      </Button>
    </React.Fragment>
  );
}

ArrowButton.propTypes = {
  handleBackwardClick: PropTypes.func.isRequired,
  handleForwardClick: PropTypes.func.isRequired,
};

export default ArrowButton;
