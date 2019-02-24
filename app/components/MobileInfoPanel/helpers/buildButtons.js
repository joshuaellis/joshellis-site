/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function buildButtons() {
  const HeadingWrapper = styled.div`
    min-width: 258px;
    display: flex;
    margin: 0px auto 32px auto;
    position: relative;
    left: 8px;
    justify-content: space-between;
    @media (max-width: 320px) {
      margin-bottom: 8px;
    }
  `;
  const A = styled(Link)`
    &:focus {
      outline: none;
    }
  `;
  const SVG = styled.svg`
    width: 24px;
    height: 24px;
  `;
  const Label = styled.span`
    font-family: 'FRAC-Bold';
    font-weight: 600;
    letter-spacing: -0.01em;
    font-size: 12px;
  `;

  if (this.location === 'about') {
    return (
      <HeadingWrapper>
        <SVG
          className="disabledButton"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g id="icons">
            <path
              style={{ fill: '#fff', opacity: '0.8' }}
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z"
            />
            <rect style={{ fill: 'none' }} width="24" height="24" />
          </g>
        </SVG>
        <h2 style={{ position: 'relative', bottom: '4px' }}>
          {
            // eslint-disable-next-line react/jsx-no-comment-textnodes
          }
          <Label>//00 </Label>
          About
        </h2>
        <A to="/work">
          <SVG
            style={{ transform: 'rotate(180deg)' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g id="icons">
              <path
                style={{ fill: '#fff', opacity: '0.8' }}
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z"
              />
              <rect style={{ fill: 'none' }} width="24" height="24" />
            </g>
          </SVG>
        </A>
      </HeadingWrapper>
    );
  }
  if (this.location === 'work') {
    const val = this.props.projectList.indexOf(this.props.project);
    // eslint-disable-next-line eqeqeq
    if (val == 0) {
      return (
        <HeadingWrapper>
          <A to="/about">
            <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g id="icons">
                <path
                  style={{ fill: '#fff', opacity: '0.8' }}
                  d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z"
                />
                <rect style={{ fill: 'none' }} width="24" height="24" />
              </g>
            </SVG>
          </A>
          <h2 style={{ position: 'relative', bottom: '4px' }}>
            <Label>
              //0
              {val + 1}{' '}
            </Label>
            {this.props.project}
          </h2>
          <SVG
            onClick={this.handleForwardClick}
            style={{ transform: 'rotate(180deg)' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g id="icons">
              <path
                style={{ fill: '#fff', opacity: '0.8' }}
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z"
              />
              <rect style={{ fill: 'none' }} width="24" height="24" />
            </g>
          </SVG>
        </HeadingWrapper>
      );
    }
    if (val === this.props.projectList.length - 1) {
      return (
        <HeadingWrapper>
          <SVG
            onClick={this.handleBackwardClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g id="icons">
              <path
                style={{ fill: '#fff', opacity: '0.8' }}
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z"
              />
              <rect style={{ fill: 'none' }} width="24" height="24" />
            </g>
          </SVG>
          <h2 style={{ position: 'relative', bottom: '4px' }}>
            <Label>
              //0
              {val + 1}{' '}
            </Label>
            {this.props.project}
          </h2>
          <SVG
            className="disabledButton"
            style={{ transform: 'rotate(180deg)' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g id="icons">
              <path
                style={{ fill: '#fff', opacity: '0.8' }}
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z"
              />
              <rect style={{ fill: 'none' }} width="24" height="24" />
            </g>
          </SVG>
        </HeadingWrapper>
      );
    }
    return (
      <HeadingWrapper>
        <SVG
          onClick={this.handleBackwardClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g id="icons">
            <path
              style={{ fill: '#fff', opacity: '0.8' }}
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z"
            />
            <rect style={{ fill: 'none' }} width="24" height="24" />
          </g>
        </SVG>
        <h2 style={{ position: 'relative', bottom: '4px' }}>
          <Label>
            //0
            {val + 1}{' '}
          </Label>
          {this.props.project}
        </h2>
        <SVG
          onClick={this.handleForwardClick}
          style={{ transform: 'rotate(180deg)' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g id="icons">
            <path
              style={{ fill: '#fff', opacity: '0.8' }}
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z"
            />
            <rect style={{ fill: 'none' }} width="24" height="24" />
          </g>
        </SVG>
      </HeadingWrapper>
    );
  }
  return null;
}

export default buildButtons;
