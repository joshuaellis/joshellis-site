import React from 'react'
import styled from 'styled-components'

import { testMarkdownLink } from 'lib/utils'

export default (container = 'div') => ({
  types: {
    block: ({ children }) =>
      children[0].length > 0 ? (
        <AboutTextContainer>{children}</AboutTextContainer>
      ) : (
        <br />
      )
  },
  marks: {
    color: ({ mark: { hex }, children }) => (
      <AboutColorText style={{ color: hex }}>
        {testMarkdownLink(children[0])}
      </AboutColorText>
    )
  },
  container
})

const AboutTextContainer = styled.span`
  display: block;
`

const AboutColorText = styled.span``
