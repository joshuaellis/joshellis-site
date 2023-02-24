import { styled } from 'styles/stitches.config'

import { Heading } from './Heading'

export const GradiantHeader = styled(Heading, {
  display: 'inline',
  background: '$blueGreenGradient100',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  mb: 4,
})
