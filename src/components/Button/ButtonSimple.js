import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import getFontStyles from 'helpers/getFontStyles'

import { FONT_STYLE_SURT_24_400 } from 'references/styles/fonts'
import { COLORS } from 'references/styles'

const ButtonSimple = ({
  children = 'button',
  className,
  onClick,
  gaLabel,
  id,
  href,
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
      href={href}
      tag={tag}
      {...(tag === 'a' ? { rel: 'nofollow noopener noreferrer' } : {})}
    >
      {children}
    </Button>
  )
}

ButtonSimple.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  gaLabel: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  tag: PropTypes.string,
}

export default ButtonSimple

const BUTTON_BLUR = 20

const BUTTON_OFFSET = 10

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
  ${getFontStyles(FONT_STYLE_SURT_24_400)}

  padding: 1rem 2.8rem;
  background-color: ${COLORS.white};
  box-shadow: ${-BUTTON_OFFSET}px ${-BUTTON_OFFSET}px ${BUTTON_BLUR}px #ffffff,
    ${BUTTON_OFFSET}px ${BUTTON_OFFSET}px ${BUTTON_BLUR}px #d3d3d3;
  border-radius: 0.8rem;

  &:hover {
    color: ${COLORS.blue};
  }

  &:active {
    box-shadow: inset ${-BUTTON_OFFSET}px ${-BUTTON_OFFSET}px ${BUTTON_BLUR}px
        #ffffff,
      inset ${BUTTON_OFFSET}px ${BUTTON_OFFSET}px ${BUTTON_BLUR}px #e0e0e0;
  }
`
