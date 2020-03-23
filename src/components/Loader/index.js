import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { COLORS } from 'styles'

function Loader ({ className, size }) {
  return (
    <LoaderContainer
      className={className}
      style={{ width: size, height: size }}
    />
  )
}

const SpinKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinBackKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-720deg);
  }
`

const LoaderContainer = styled.div`
  position: relative;
  border: 2px solid transparent;
  border-top-color: ${COLORS.blue};
  border-left-color: ${COLORS.blue};
  border-radius: 50%;
  animation: ${SpinKeyframes} 1.5s linear infinite;

  &:before {
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    content: '';
    border: 2px solid transparent;
    border-top-color: ${COLORS.blue};
    border-left-color: ${COLORS.blue};
    border-radius: 50%;
    animation: ${SpinBackKeyframes} 1s linear infinite;
  }
`

Loader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string
}

export default memo(Loader)
