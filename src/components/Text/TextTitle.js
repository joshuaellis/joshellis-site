import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FONT_STYLE_SURT_32_800 } from 'references/styles/fonts'

import { getFontStyles } from 'helpers/text'

export const TextTitle = ({
  className,
  id,
  forwardedRef,
  tag,
  fontStyle,
  children,
  gaLabel
}) => (
  <Title
    className={className}
    fontStyle={fontStyle}
    forwardref={forwardedRef}
    gaLabel={gaLabel}
    id={id}
    tag={tag}
  >
    {children}
  </Title>
)

TextTitle.propTypes = {
  className: PropTypes.string,
  gaLabel: PropTypes.string,
  id: PropTypes.string,
  fontStyle: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired
}

TextTitle.defaultProps = {
  fontStyle: FONT_STYLE_SURT_32_800,
  tag: 'h2'
}

const Title = styled(({ tag, children, ...props }) => {
  return React.createElement(
    tag,
    {
      'data-ga-label': props.gaLabel,
      className: props.className,
      id: props.id,
      forwardref: props.forwardedRef,
      ref: props.forwardref
    },
    children
  )
})`
  ${props => getFontStyles(props.fontStyle)}
`

export default React.forwardRef((props, ref) => (
  <TextTitle {...props} forwardedRef={ref} />
))
