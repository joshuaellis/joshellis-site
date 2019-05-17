/**
 *
 * ImageModal
 *
 */

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PALETTE } from '../../constants';

function ImageModal(props) {
  const { onClose, image, selectedID } = props;
  const reactSwipeRef = React.createRef();
  let val = 0;
  if (image.type === 'img-carousel') {
    val = image.content.findIndex(x => x.id === selectedID);
  }
  useEffect(() => {
    document.getElementById('body').style.overflow = 'hidden';
    return () => {
      document.getElementById('body').style.overflow = 'auto';
      onClose(false);
    };
  }, []);
  const swipeOptions = {
    startSlide: val,
    continuous: false,
  };
  const JSX_MODAL = (
    <ModalContainer height={window.scrollY}>
      <SVGButton onClick={() => onClose(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 46">
          <g>
            <polygon
              style={{ fill: PALETTE.white }}
              points="28.71 16.71 27.29 15.29 22 20.59 16.71 15.29 15.29 16.71 20.59 22 15.29 27.29 16.71 28.71 22 23.41 27.29 28.71 28.71 27.29 23.41 22 28.71 16.71"
            />
            <rect style={{ fill: 'none' }} width="44" height="46" />
          </g>
        </svg>
      </SVGButton>
      {image.type === 'img-carousel' ? (
        <ReactSwipe
          className="carousel"
          swipeOptions={swipeOptions}
          ref={reactSwipeRef}
        >
          {image.content.map(x => (
            <div>
              <Image id={x.id} src={x.content} alt={x.alt} />
            </div>
          ))}
        </ReactSwipe>
      ) : (
        <Image alt={image.alt} id={image.id} src={image.content} />
      )}
    </ModalContainer>
  );

  return ReactDOM.createPortal(JSX_MODAL, document.querySelector('#modal'));
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: ${props => (props.height ? `${props.height}px` : '0px')};
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: calc(100% - 32px);
  max-height: calc(100% - 32px);
  align-self: center;
  margin: 16px;
`;

const SVGButton = styled.button`
  border: none;
  padding: 0px;
  background-color: transparent;
  width: 48px;
  height: 48px;
  position: absolute;
  right: 0;
  top: 0;
`;

ImageModal.propTypes = {
  onClose: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  selectedID: PropTypes.string,
};

export default ImageModal;
