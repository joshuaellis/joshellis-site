/* eslint-disable no-nested-ternary */
/**
 *
 * Cursor
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Cursor(props) {
  const svgStyle = {
    fill: 'rgba(255,255,255,1)',
  };
  if (props.left) {
    return (
      <CursorDiv hide={props.hide} x={props.x} y={props.y}>
        <svg
          style={svgStyle}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M8.93,12l8.13-8.13a1.49,1.49,0,0,0,0-2.12h0a1.49,1.49,0,0,0-2.12,0L6.81,9.88l-.91.9a1.73,1.73,0,0,0,0,2.44l.91.9,8.13,8.13a1.49,1.49,0,0,0,2.12,0h0a1.49,1.49,0,0,0,0-2.12Z" />
        </svg>
      </CursorDiv>
    );
  }
  return (
    <CursorDiv hide={props.hide} x={props.x} y={props.y}>
      <svg
        style={svgStyle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M15.07,12,6.94,20.13a1.49,1.49,0,0,0,0,2.12h0a1.49,1.49,0,0,0,2.12,0l8.13-8.13.91-.9a1.73,1.73,0,0,0,0-2.44l-.91-.9L9.06,1.75a1.49,1.49,0,0,0-2.12,0h0a1.49,1.49,0,0,0,0,2.12Z" />
      </svg>
    </CursorDiv>
  );
}

const CursorDiv = styled.div(attrs => ({
  height: '64px',
  width: '64px',
  zIndex: 9999,
  position: 'absolute',
  display: 'flex',
  left: `${attrs.x - 32}px`,
  top: `${attrs.y - 32}px`,
  pointerEvents: 'none',
  mixBlendMode: 'difference',
  opacity: attrs.hide ? '0' : '1',
  visibility: attrs.hide ? 'hidden' : 'visible',
  transition: 'visibility 0.25s, opacity 0.25s',
}));

Cursor.propTypes = {
  left: PropTypes.bool,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  hide: PropTypes.bool,
};

export default Cursor;
