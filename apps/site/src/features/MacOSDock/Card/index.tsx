import * as React from 'react'

import { Box } from 'components/Box'
import { Flex } from 'components/Flex'

interface CardProps {
  src: string
}

export const Card = ({ src }: CardProps) => (
  <Flex
    css={{
      position: 'relative',
      zIndex: 0,
      overflow: 'hidden',
      width: '100%',
      height: '100%',

      '& > img': {
        width: '50%',
        height: '50%',
        borderRadius: '50%',
      },
    }}
  >
    <Box
      as="img"
      css={{
        position: 'absolute',
        zIndex: '$1',
        opacity: 0.4,
        filter: 'blur(10px)',
        transform: 'translateY(10px) scale(1.25)',
      }}
      src={src}
      alt=""
    />
    <Box
      as="img"
      css={{
        position: 'relative',
        zIndex: 0,
      }}
      src={src}
      alt=""
    />
  </Flex>
)
