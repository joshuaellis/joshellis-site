/* eslint-disable indent */
/**
 *
 * PhotoGallery
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Cursor from '../Cursor';
import ArrowButton from './helpers/ArrowButton';
import ImageContainer from './helpers/ImageContainer';

/* eslint-disable react/prefer-stateless-function */
class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      slideLimit: this.props.imgArr.length - 1,
      leftHandSide: null,
      imageWidth: null,
    };
    this.hide = false;
    this.imageWidth = 0;
    this.offset = 0;
    this.horizontalPos = 0;
    this.verticalPos = 0;
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.getMouseLocation);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.getMouseLocation);
  }

  handleForwardClick = () => {
    const { currentSlide, slideLimit, imageWidth } = this.state;
    if (currentSlide === slideLimit) {
      this.setState({ currentSlide: 0 });
    } else {
      this.setState({ currentSlide: currentSlide + 1 });
    }
    console.log(imageWidth);
  };

  handleBackwardClick = () => {
    const { currentSlide, slideLimit } = this.state;
    if (currentSlide === 0) {
      this.setState({ currentSlide: slideLimit });
    } else {
      this.setState({ currentSlide: currentSlide - 1 });
    }
  };

  handleClose = () => {
    this.setState({ currentSlide: 0 });
    this.props.closeGallery();
  };

  getMouseLocation = e => {
    e.preventDefault();
    const x = e.screenX;
    const halfWidth = window.innerWidth / 2;
    this.horizontalPos = e.clientX;
    this.verticalPos = e.clientY;
    if (x <= halfWidth) {
      this.setState({ leftHandSide: true });
    } else {
      this.setState({ leftHandSide: false });
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
    this.hide = true;
  };

  handleMouseLeaveClose = () => {
    this.hide = false;
  };

  render() {
    const { imgArr } = this.props;
    const { currentSlide, leftHandSide, sliding } = this.state;
    return (
      <GalleryContainer>
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
        <ImageContainer currentSlide={currentSlide} sliding={sliding}>
          {imgArr}
        </ImageContainer>
        <NavContainers onClick={this.handleNavClick}>
          <ArrowButton
            handleBackwardClick={this.handleBackwardClick}
            handleForwardClick={this.handleForwardClick}
          />
        </NavContainers>
        <Cursor
          left={leftHandSide}
          x={this.horizontalPos}
          y={this.verticalPos}
          hide={this.hide}
        />
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
    cursor: none;
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

// const measureElement = element => {
//   // eslint-disable-next-line react/no-find-dom-node
//   const DOMNode = ReactDOM.findDOMNode(element);
//   return {
//     width: DOMNode.offsetWidth,
//     height: DOMNode.offsetHeight,
//   };
// };

PhotoGallery.propTypes = {
  imgArr: PropTypes.array.isRequired,
  closeGallery: PropTypes.func.isRequired,
};

export default PhotoGallery;
