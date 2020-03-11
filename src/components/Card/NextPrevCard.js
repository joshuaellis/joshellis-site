import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Link from 'next/link'
import styled from 'styled-components'

import { Image } from 'components/Image'

import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES
} from 'styles'

export default function NextPrevCard ({
  className,
  color,
  fullWidth,
  image,
  slug,
  title,
  variant
}) {
  return (
    <Link href='/work/[project]' as={slug}>
      <NextPrev
        className={clsx(
          fullWidth && 'card--full-width',
          variant === 'prev' && 'card--prev',
          variant === 'next' && 'card--next',
          className
        )}
        style={{ backgroundColor: color }}
      >
        <div className='card__container'>
          <NextPrevMeta>
            <MetaCaption>
              {variant === 'next' ? 'Next project' : 'Previous project'}
            </MetaCaption>
            <MetaTitle>{title}</MetaTitle>
          </NextPrevMeta>
          <NextPrevImageContainer
            className={clsx(fullWidth && 'card__full__container')}
          >
            <NextPrevImage
              className='card__image'
              img={image}
              sizes='(max-width: 768px) 75vw, 50vw'
            />
          </NextPrevImageContainer>
        </div>
      </NextPrev>
    </Link>
  )
}

const NextPrevImage = styled(Image)`
  transition: transform 500ms ease-out;
  transform-origin: center;
  width: calc(80% - 32px);
  position: absolute;
  z-index: -10;
  bottom: 0;

  ${MEDIA_QUERIES.tabletUp} {
    width: 62.5%;
  }

  ${MEDIA_QUERIES.desktopUp} {
    position: relative;
    bottom: 32px;
    width: 323px;
  }
`

const NextPrevImageContainer = styled.div`
  &.card__full__container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const NextPrevMeta = styled.div`
  ${MEDIA_QUERIES.desktopUp} {
    margin-top: 24px;
  }
`

const NextPrev = styled.a`
  color: ${COLORS.white};
  width: 100%;
  z-index: 0;
  display: block;
  overflow: hidden;
  position: relative;
  background-color: ${COLORS.footBg};
  height: 200px;
  padding: 16px;
  cursor: pointer;

  &:hover {
    ${NextPrevImage} {
      transform: scale(1.05);
    }
  }

  ${MEDIA_QUERIES.tabletUp} {
    padding: 32px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    .card__container {
      min-width: 528px;
      max-width: 728px;
    }
  }

  &.card--next {
    ${NextPrevMeta} {
      float: right;
      text-align: right;
    }

    ${NextPrevImage} {
      left: 16px;
    }

    ${MEDIA_QUERIES.desktopUp} {
      padding-right: 80px;

      ${NextPrevImage} {
        left: 0;
        float: left;
      }
    }
  }

  &.card--prev {
    ${NextPrevMeta} {
      float: left;
      text-align: left;
    }

    ${NextPrevImage} {
      right: 16px;
    }

    ${MEDIA_QUERIES.desktopUp} {
      padding-left: 80px;

      ${NextPrevImage} {
        right: 0;
        float: right;
      }
    }
  }

  &.card--full-width {
    ${NextPrevImage} {
      left: 0;
      bottom: auto;
      width: inherit;
      height: inherit;
      object-fit: cover;
      position: relative;

      ${MEDIA_QUERIES.desktopUp} {
        position: absolute;
      }
    }
  }
`

const MetaCaption = styled.span`
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.small};
  line-height: ${LINE_HEIGHTS.defaultSmall};
  font-weight: 500;
  display: block;
  margin-bottom: 6px;

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.default};
    line-height: ${LINE_HEIGHTS.defaultSmall};
    margin-bottom: 12px;
  }
`

const MetaTitle = styled.h3`
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.default};
  line-height: ${LINE_HEIGHTS.default};
  font-weight: 800;
`

NextPrevCard.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  image: PropTypes.object,
  slug: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.string
}
