/**
 *
 * ImageModal
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import handleModalScrollling from 'hooks/handleModalScrollling'

import Close from 'icons/close.svg'

import IconButton from 'components/IconButton'
import { Image } from 'components/Image'

import { EASING } from 'styles'

function ImageModal ({ img, className, onCloseClick }) {
  useEffect(handleModalScrollling, [])

  return (
    <Modal className={className}>
      <Image img={img} sizes='100vw' />
      <IconButton className='modal__button' onClick={onCloseClick}>
        <Close height={24} width={24} />
      </IconButton>
    </Modal>
  )
}

const FallInKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.15);
  }

  25% {
    opacity: 1;
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
`

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  .modal__button {
    border: none;
    padding: 0px;
    background-color: transparent;
    width: 48px;
    height: 48px;
    position: absolute;
    right: 0;
    top: 0;
  }

  & > *:first-child {
    animation: ${FallInKeyframes} 250ms ${EASING.easeOutSine};
  }
`

ImageModal.propTypes = {
  className: PropTypes.string,
  img: PropTypes.object,
  onCloseClick: PropTypes.func
}

export default ImageModal
