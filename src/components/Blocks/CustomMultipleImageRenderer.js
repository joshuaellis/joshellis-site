import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Plx from 'react-plx'

import { generateColor } from 'lib/utils'

import InlineImage from 'components/InlineImage'
import LazyImage from 'components/Image'

export default function CustomMultipleImageRenderer ({
  single_image: singleImg
}) {
  const { color } = singleImg[0]
  return (
    <ProjectMultipleInline
      parallaxData={[
        {
          start: 'self',
          startOffset: '0',
          end: 'self',
          endOffset: '100%',
          easing: 'easeOutSine',
          properties: [
            {
              startValue: 10,
              endValue: -10,
              property: 'translateY',
              unit: '%'
            }
          ]
        }
      ]}
    >
      <InlineImage
        className='project__multiple-inline'
        color={generateColor(color.rgb, color.alpha)}
        caption={singleImg.map(x => x.caption)}
        keys={singleImg.map(x => x._key)}
      >
        {singleImg.map(({ alt, asset, _key }) => (
          <LazyImage
            className='project__multiple-inline'
            alt={alt}
            img={{ asset }}
            key={_key}
            sizes='(max-width: 768px) 100vw, 75vw'
          />
        ))}
      </InlineImage>
    </ProjectMultipleInline>
  )
}

export const ProjectMultipleInline = styled(Plx)``

CustomMultipleImageRenderer.propTypes = {
  singleImg: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      asset: PropTypes.object,
      caption: PropTypes.string,
      color: PropTypes.object
    })
  )
}
