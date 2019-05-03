/**
 *
 * RotateScreen
 *
 */

import React from 'react';

function RotateScreen() {
  return (
    <div
      id="rotate overlay"
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '100',
        backgroundColor: '#000000',
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    >
      <svg
        style={{
          width: '64px',
          height: '64px',
          position: 'relative',
          bottom: '16px',
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          style={{ fill: '#fff' }}
          d="M8.46,2.81,21.19,15.54l-5.65,5.65L2.81,8.46,8.46,2.81m0-1.42L1.39,8.46,15.54,22.61l7.07-7.07L8.46,1.39Z"
        />
        <path
          style={{ fill: '#fff' }}
          d="M14.3,1.62l.91-.91L14.5,0,12.38,2.12,14.5,4.24l.71-.7-.92-.92A9.51,9.51,0,0,1,23,12.08h1A10.51,10.51,0,0,0,14.3,1.62Z"
        />
        <path
          style={{ fill: '#fff' }}
          d="M9.7,22.38l-.91.91L9.5,24l2.12-2.12L9.5,19.76l-.71.7.92.92A9.51,9.51,0,0,1,1,11.92H0A10.51,10.51,0,0,0,9.7,22.38Z"
        />
        <rect style={{ fill: 'none' }} width="24" height="24" />
      </svg>
    </div>
  );
}

RotateScreen.propTypes = {};

export default RotateScreen;