/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-string-refs */
import React from 'react';
import styled from 'styled-components';
import Swipe from 'react-easy-swipe';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ColourLayer = styled.div`
  background-color: rgba(249, 56, 35, 0.35);
  width: 100%;
  height: 100%;
  position: relative;
  bottom: calc(100% + 16px);
  right: 16px;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 100%;
  height: calc(38vh - 0px);
  margin: 16px;
`;

class MobileInfoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.location = props.location.pathname.replace(/\//gi, '');
    this.swipeDirection = null;
    props.updateProject ? props.updateProject('Black Mirror') : null;
    this.copyBox = React.createRef();
  }

  buildCopy = () => {
    const TextWrapper = styled.div`
      background-color: rgba(271, 59, 255, 0.35);
      text-align: left;
      padding: 12px 32px 24px 16px;
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 10;
      margin-bottom: auto;
      @media (max-width: 320px) {
        padding: 8px 32px 24px 16px;
      }
    `;
    const Span = styled.span`
      font-family: 'FRAC-Regular';
      font-weight: 400;
      letter-spacing: -0.01em;
    `;
    let text = this.props.message;
    if (this.location === 'about') {
      return (
        <TextWrapper>
          <div
            style={{ height: '100%', overflowY: 'scroll' }}
            ref={this.copyBox}
          >
            <p>
              <Span>{text[0]}</Span>
              {text[1]}
            </p>
            <p style={{ marginBottom: '8px' }}>
              <Span>{text[2]}</Span>
              {text[3]}
            </p>
            <p>
              <Span>{text[4]}</Span>
              {text[5]}
            </p>
          </div>
        </TextWrapper>
      );
    }
    if (this.location === 'work') {
      text = this.props.message[this.props.project];
      if (!text) {
        return (
          <TextWrapper>
            <p>Something went wrong...</p>
          </TextWrapper>
        );
      }
      return (
        <TextWrapper>
          <div
            style={{ height: '100%', overflowY: 'scroll' }}
            ref={this.copyBox}
          >
            <p>
              <Span>Role: </Span>
              {text[0]}
            </p>
            <p>
              <Span>Studio: </Span>
              {text[1]}
            </p>
            <p>
              <Span>Year: </Span>
              {text[2]}
            </p>
            {text[4] ? (
              <p>
                <Span>See Here: </Span>
                <a
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  href={text[4]}
                >
                  {text[5]}
                </a>
              </p>
            ) : null}
            <p style={{ marginTop: '16px' }}>
              <Span>Info: </Span>
              {text[3]}
            </p>
          </div>
        </TextWrapper>
      );
    }
    return null;
  };

  buildButtons = () => {
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
  };

  handleForwardClick = () => {
    const { projectList, project, updateProject } = this.props;
    const val = projectList.indexOf(project) + 1;
    if (projectList[val]) {
      updateProject(projectList[val]);
    } else {
      updateProject(projectList[0]);
    }
  };

  handleBackwardClick = () => {
    const { projectList, project, updateProject } = this.props;
    const val = projectList.indexOf(project) - 1;
    if (projectList[val]) {
      updateProject(projectList[val]);
    } else {
      updateProject(projectList[projectList.length - 1]);
    }
  };

  componentDidUpdate() {
    this.copyBox.current.scrollTop = 0;
  }

  render() {
    if (this.props.message) {
      return (
        <div
          ref="parent"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Swipe>
            {this.buildButtons()}
            <Wrapper>
              {this.buildCopy()}
              <ColourLayer />
            </Wrapper>
          </Swipe>
        </div>
      );
    }
    return null;
  }
}

MobileInfoPanel.propTypes = {
  projectList: PropTypes.array,
  updateProject: PropTypes.func,
  project: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  location: PropTypes.object,
};

export default MobileInfoPanel;
