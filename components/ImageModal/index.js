/**
 *
 * ImageModal
 *
 */

import React, { useEffect, useRef } from 'react';
import ReactSwipe from 'react-swipe';
import PropTypes from 'prop-types';

import Close from 'icons/close.svg';

import IconButton from '../IconButton';

function ImageModal({ onClose, image, selectedID }) {
  const reactSwipeRef = useRef();
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

  return (
    <div
      className="modal"
      style={{ top: window.scrollY ? `${window.scrollY}px` : '0px' }}
    >
      {/* to do – move to icon-button */}
      <IconButton className="modal__button" onClick={() => onClose(false)}>
        <Close height={24} width={24} />
      </IconButton>
      {image.type === 'img-carousel' ? (
        <ReactSwipe
          className="carousel"
          swipeOptions={swipeOptions}
          ref={reactSwipeRef}
        >
          {image.content.map(x => (
            <div>
              <img
                className="modal__image"
                id={x.id}
                src={x.content}
                alt={x.alt}
              />
            </div>
          ))}
        </ReactSwipe>
      ) : (
        <img
          className="modal__image"
          alt={image.alt}
          id={image.id}
          src={image.content}
        />
      )}
      {/* to do – replace with IMAGE component */}
    </div>
  );
}

ImageModal.propTypes = {
  onClose: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  selectedID: PropTypes.string,
};

export default ImageModal;
