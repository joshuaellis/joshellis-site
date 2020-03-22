import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Plx from 'react-plx'
import clsx from 'clsx'

import { generateColor } from 'lib/utils'

import InlineImage from 'components/InlineImage'
import FullWidthImage from 'components/FullWidthImage'
import LazyImage, { Image } from 'components/Image'

export default function CustomImageRenderer ({
  alt,
  asset,
  caption,
  className,
  fullWidth,
  color,
  _key: key
}) {
  if (fullWidth) {
    return (
      <ProjectFullWidthImage
        className={className}
        caption={caption}
        expandId={key}
      >
        <Plx
          parallaxData={[
            {
              start: 'self',
              startOffset: '0',
              end: 'self',
              endOffset: '100%',
              easing: 'easeOutSine',
              properties: [
                {
                  startValue: 0,
                  endValue: -40,
                  property: 'translateY',
                  unit: '%'
                }
              ]
            }
          ]}
        >
          <Image alt={alt} img={{ asset }} sizes='100vw' />
        </Plx>
      </ProjectFullWidthImage>
    )
  }

  return (
    <ProjectInlineImage
      className={clsx('project__inline', className)}
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
              endValue: -20,
              property: 'translateY',
              unit: '%'
            }
          ]
        }
      ]}
    >
      <InlineImage
        caption={caption}
        color={generateColor(color.rgb, color.alpha)}
        expandId={key}
      >
        <LazyImage
          className='project__inline'
          alt={alt}
          img={{ asset }}
          sizes='(max-width: 768px) 100vw, 75vw'
        />
      </InlineImage>
    </ProjectInlineImage>
  )
}

export const ProjectInlineImage = styled(Plx)``

export const ProjectFullWidthImage = styled(FullWidthImage)``

CustomImageRenderer.propTypes = {
  alt: PropTypes.string,
  asset: PropTypes.object,
  caption: PropTypes.string,
  fullWidth: PropTypes.bool.isRequired,
  color: PropTypes.string,
  key: PropTypes.string
}

CustomImageRenderer.defaultProps = {
  fullWidth: false
}
