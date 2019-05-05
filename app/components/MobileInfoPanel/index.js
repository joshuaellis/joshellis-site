/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-string-refs */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class MobileInfoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.location = props.location.pathname.replace(/\//gi, '');
    this.swipeDirection = null;
    props.updateProject ? props.updateProject('Blackshaw') : null;
  }

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

  render() {
    if (this.props.message) {
      const val = this.props.projectList
        ? this.props.projectList.indexOf(this.props.project)
        : null;
      const text =
        this.location === 'about'
          ? this.props.message
          : this.location === 'work'
            ? this.props.message[this.props.project]
            : [
                'loading error',
                'loading error',
                'loading error',
                'loading error',
              ];
      return (
        <React.Fragment>
          <HeadingWrapper>
            <ButtonSpan>
              {this.location === 'work' ? (
                <React.Fragment>
                  <SVG onClick={this.handleBackwardClick} viewBox="0 0 24 24">
                    <g>
                      <path
                        style={{ fill: '#fff', opacity: '0.8' }}
                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z"
                      />
                      <rect style={{ fill: 'none' }} width="24" height="24" />
                    </g>
                  </SVG>
                  <SVG
                    onClick={this.handleForwardClick}
                    rotate
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path
                        style={{ fill: '#fff', opacity: '0.8' }}
                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z"
                      />
                      <rect style={{ fill: 'none' }} width="24" height="24" />
                    </g>
                  </SVG>
                </React.Fragment>
              ) : null}
            </ButtonSpan>
            <H2 location={this.location}>
              <Label>
                //0
                {this.location === 'work' ? val + 1 : '0'}
              </Label>
              {this.location === 'work' ? this.props.project : 'About'}
            </H2>
          </HeadingWrapper>
          <Wrapper>
            <TextWrapper>
              {this.location === 'about' ? (
                <React.Fragment>
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
                </React.Fragment>
              ) : this.location === 'work' ? (
                <React.Fragment>
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
                </React.Fragment>
              ) : (
                <p>Something went wrong...</p>
              )}
            </TextWrapper>
            <ColourLayer />
          </Wrapper>
        </React.Fragment>
      );
    }
    return null;
  }
}

const HeadingWrapper = styled.div`
  grid-row: 1;
  padding: 0px 16px;
  margin: 12px 0px;
  @media (min-width: 544px) {
    margin: 24px 0px;
  }
`;

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: relative;
  bottom: ${props => (props.location === 'work' ? '28px' : '0px')};
`;

const Label = styled.span`
  font-family: 'FRAC-Bold';
  font-weight: 600;
  letter-spacing: -0.01em;
  font-size: 12px;
`;

const ButtonSpan = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
`;

// const A = styled(Link)`
//   &:focus {
//     outline: none;
//   }
//   &:hover {
//     cursor: default;
//   }
//   cursor: default !important;
// `;

const SVG = styled.svg`
  width: 24px;
  height: 24px;
  transform: ${props => (props.rotate ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const Wrapper = styled.div`
  width: 100%;
  grid-row: 2;
  padding: 0px 16px;
  margin: 24px 0px;
  @media (min-width: 544px) {
    margin: 32px 0px;
  }
`;
const TextWrapper = styled.div`
  background-color: rgba(271, 59, 255, 0.35);
  padding: 8px 32px 24px 16px;
  position: relative;
  height: 100%;
  z-index: 10;
  margin-left: 16px;
  @media (min-width: 544px) {
    padding: 12px 40px 32px 24px;
  }
`;
const ColourLayer = styled.div`
  background-color: rgba(249, 56, 35, 0.35);
  width: calc(100% - 16px);
  height: 100%;
  position: relative;
  bottom: calc(100% + 16px);
  z-index: 1;
`;
const Span = styled.span`
  font-family: 'FRAC-Regular';
  font-weight: 400;
  letter-spacing: -0.01em;
`;

MobileInfoPanel.propTypes = {
  projectList: PropTypes.array,
  updateProject: PropTypes.func,
  project: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  location: PropTypes.object,
};

export default MobileInfoPanel;
