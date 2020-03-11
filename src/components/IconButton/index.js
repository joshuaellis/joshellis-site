import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { COLORS } from 'styles'

function IconButton ({ children, className, ...restProps }) {
  return (
    <StyledIconButton type='button' className={className} {...restProps}>
      {children}
    </StyledIconButton>
  )
}

const StyledIconButton = styled.button`
  padding: 0;
  border: 0;
  border-radius: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
  color: inherit;
  text-align: inherit;
  appearance: none;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover > svg,
  &:active > svg {
    fill: ${COLORS.blue};
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(${COLORS.blue}, 0.4);
  }
`

IconButton.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string
}

export default IconButton
