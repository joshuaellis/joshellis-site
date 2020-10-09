import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FONT_STYLE_SURT_16_400 } from 'references/styles/fonts'

import { getFontStyles } from 'helpers/text'

export default function TextCopy ({ className, children, fontStyle }) {
  return (
    <Copy className={className} fontStyle={fontStyle}>
      {children}
    </Copy>
  )
}

TextCopy.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  fontStyle: PropTypes.string.isRequired
}

TextCopy.defaultProps = {
  children: '',
  fontStyle: FONT_STYLE_SURT_16_400
}

const Copy = styled.p`
  ${props => getFontStyles(props.fontStyle)}
`
