/**
 *
 * ImageModal
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PALETTE } from '../../constants';

function ImageModal(props) {
  const { onClose, image } = props;
  let [img, setImg] = useState(image);
  if (Array.isArray(image)) {
    [img, setImg] = useState(image[0]);
  }
  useEffect(() => {
    document.getElementById('body').style.overflow = 'hidden';
    return () => {
      document.getElementById('body').style.overflow = 'auto';
    };
  }, []);
  function handleClick() {
    setImg(null);
    onClose(false);
  }
  return (
    <ModalContainer>
      <SVGButton onClick={handleClick}>
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
      <Image alt={img.alt} id={img.id} src={img.content} />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 0;
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
};

export default ImageModal;
