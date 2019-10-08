/**
 *
 * ImageModal
 *
 */

import React, { useEffect, useRef } from 'react';
import ReactSwipe from 'react-swipe';
import PropTypes from 'prop-types';

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
      <button
        type="button"
        className="modal__button"
        onClick={() => onClose(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 46">
          <g>
            <polygon points="28.71 16.71 27.29 15.29 22 20.59 16.71 15.29 15.29 16.71 20.59 22 15.29 27.29 16.71 28.71 22 23.41 27.29 28.71 28.71 27.29 23.41 22 28.71 16.71" />
            <rect width="44" height="46" />
          </g>
        </svg>
      </button>
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
