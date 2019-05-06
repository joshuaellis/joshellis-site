/**
 *
 * PhotoGallery
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MediaQuery from 'react-responsive';

import Cursor from '../Cursor';
import ArrowButton from './helpers/ArrowButton';
import ImageContainer from './helpers/ImageContainer';

/* eslint-disable react/prefer-stateless-function */
class PhotoGallery extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      slideLimit: props.imgArr.length,
      leftHandSide: null,
      sliding: false,
      direction: props.imgArr.length === 2 ? 'prev' : 'next',
      horizontalPos: -100,
      verticalPos: -100,
      hide: false,
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.getMouseLocation);
    document.addEventListener('keydown', this.handleEsc, false);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.getMouseLocation);
    document.removeEventListener('keydown', this.handleEsc, false);
  }

  handleEsc = e => {
    if (e.keyCode === 27) {
      this.props.closeGallery();
    }
  };

  handleForwardClick = () => {
    const { position } = this.state;
    const { imgArr } = this.props;
    const numItems = imgArr.length;
    if (numItems === 2 && position === 1) return;
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
  };

  handleBackwardClick = () => {
    const { position } = this.state;
    const { imgArr } = this.props;
    const numItems = imgArr.length;
    if (numItems === 2 && position === 0) return;
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  };

  handleClose = () => {
    this.setState({ position: 0 });
    this.props.closeGallery();
  };

  getMouseLocation = e => {
    e.preventDefault();
    const x = e.screenX;
    const halfWidth = window.innerWidth / 2;
    if (x <= halfWidth) {
      this.setState({
        leftHandSide: true,
        horizontalPos: e.clientX,
        verticalPos: e.clientY,
      });
    } else {
      this.setState({
        leftHandSide: false,
        horizontalPos: e.clientX,
        verticalPos: e.clientY,
      });
    }
  };

  handleNavClick = () => {
    const { leftHandSide } = this.state;
    if (leftHandSide) {
      this.handleBackwardClick();
    } else {
      this.handleForwardClick();
    }
  };

  handleMouseEnterClose = () => {
    this.setState({ hide: true });
  };

  handleMouseLeaveClose = () => {
    this.setState({ hide: false });
  };

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position,
    });

    setTimeout(() => {
      this.setState({
        sliding: false,
      });
    }, 50);
  };

  render() {
    const { imgArr } = this.props;
    const {
      position,
      leftHandSide,
      sliding,
      direction,
      slideLimit,
      horizontalPos,
      verticalPos,
      hide,
    } = this.state;
    return (
      <GalleryContainer imgLength={imgArr.length}>
        <CloseBox
          onMouseEnter={this.handleMouseEnterClose}
          onMouseLeave={this.handleMouseLeaveClose}
          onClick={this.handleClose}
        >
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
        <ImageContainer
          sliding={sliding}
          direction={direction}
          position={position}
          numSlides={slideLimit}
        >
          {imgArr}
        </ImageContainer>
        <NavContainers onClick={this.handleNavClick}>
          <ArrowButton
            handleBackwardClick={this.handleBackwardClick}
            handleForwardClick={this.handleForwardClick}
          />
        </NavContainers>
        <MediaQuery minDeviceWidth={1110}>
          {imgArr.length > 1 ? (
            <Cursor
              left={leftHandSide}
              x={horizontalPos}
              y={verticalPos}
              hide={hide}
            />
          ) : null}
        </MediaQuery>
      </GalleryContainer>
    );
  }
}

const GalleryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(26, 26, 26, 0.8);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999;

  @media screen and (min-device-width: 1100px) and (-webkit-min-device-pixel-ratio: 2) {
    cursor: ${props => (props.imgLength > 1 ? 'none' : 'default')};
  }
`;

const CloseBox = styled.button`
  position: absolute;
  right: 0;
  width: 48px;
  height: 48px;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  z-index: 1000;
`;

const NavContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

PhotoGallery.propTypes = {
  imgArr: PropTypes.array.isRequired,
  closeGallery: PropTypes.func.isRequired,
};

export default PhotoGallery;
