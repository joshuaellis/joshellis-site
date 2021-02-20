import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonCircle = ({
  children = 'button',
  className,
  onClick,
  gaLabel,
  id,
  tag = 'button',
}) => {
  const handleOnClick = (e) => {
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <Button
      className={className}
      gaLabel={gaLabel}
      id={id}
      onClick={handleOnClick}
      type="button"
      tag={tag}
    >
      {children}
    </Button>
  )
}

ButtonCircle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  gaLabel: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  tag: PropTypes.string,
}

export default ButtonCircle

const BUTTON_BLUR = 18

const BUTTON_OFFSET = 9

const Button = styled(({ tag, children, gaLabel, ...props }) => {
  return React.createElement(
    tag,
    {
      'data-ga-label': gaLabel,
      ...props,
    },
    children
  )
})`
  width: 6.4rem;
  height: 6.4rem;
  background-color: linear-gradient(145deg, #ffffff, #dadada);
  box-shadow: ${-BUTTON_OFFSET}px ${-BUTTON_OFFSET}px ${BUTTON_BLUR}px #ffffff,
    ${BUTTON_OFFSET}px ${BUTTON_OFFSET}px ${BUTTON_BLUR}px #bfbfbf;
  border-radius: 50%;

  &:active {
    background-color: linear-gradient(145deg, #dadada, #ffffff);
  }
`
