/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainWrapper = styled.div`
  min-width: 600px;
  max-width: 704px;
  border: solid 2px #4a94ff;
  z-index: 10;
  background-color: #0f0f0f;
  margin: auto 72px auto 72px;
`;
const TitleBar = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: solid 2px #4a94ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 16px;
`;

const CloseBox = styled.button`
  width: 48px;
  height: 48px;
  padding: 0;
  border-left: solid 2px #4a94ff;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const CopyBox = styled.div`
  margin: 24px 40px 40px 40px;
`;

function Window(props) {
  return (
    <MainWrapper
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <TitleBar>
        <h6>{props.title}</h6>
        <CloseBox onClick={props.closeWindow}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 46">
            <g>
              <polygon
                style={{ fill: '#4a94ff' }}
                points="28.71 16.71 27.29 15.29 22 20.59 16.71 15.29 15.29 16.71 20.59 22 15.29 27.29 16.71 28.71 22 23.41 27.29 28.71 28.71 27.29 23.41 22 28.71 16.71"
              />
              <rect style={{ fill: 'none' }} width="44" height="46" />
            </g>
          </svg>
        </CloseBox>
      </TitleBar>
      <CopyBox>{props.children}</CopyBox>
    </MainWrapper>
  );
}
Window.propTypes = {
  title: PropTypes.string.isRequired,
  closeWindow: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseEnter: PropTypes.func,
  children: PropTypes.any,
};

export default Window;
