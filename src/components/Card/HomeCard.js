import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image } from 'components/Image'

import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES
} from 'styles'

export default function HomeCard ({ className, client, image, slug, title }) {
  return (
    <HomeCardAnchor href={slug} className={className}>
      <HomeCardMeta>
        <MetaCaption>{client}</MetaCaption>
        <MetaTitle>{title}</MetaTitle>
      </HomeCardMeta>
      <HomeCardImage>
        <StyledImage img={image} sizes='(max-width: 768px) 100vw, 75vw' />
      </HomeCardImage>
    </HomeCardAnchor>
  )
}

const HomeCardImage = styled.div`
  transition: transform 500ms ease-out;
  transform-origin: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const HomeCardAnchor = styled.a`
  color: ${COLORS.white};
  width: 100%;
  z-index: 0;
  display: block;
  overflow: hidden;
  position: relative;
  background-color: ${COLORS.footBg};
  padding: 12px;
  position: relative;
  cursor: pointer;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: ${(4 / 5) * 100}%;
  }

  &:hover {
    ${HomeCardImage} {
      transform: scale(1.05);
    }
  }

  ${MEDIA_QUERIES.tabletUp} {
    padding: 16px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    padding: 32px;
  }
`

const HomeCardMeta = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 10;

  ${MEDIA_QUERIES.tabletUp} {
    top: 16px;
    left: 16px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    top: 32px;
    left: 32px;
  }
`

const MetaCaption = styled.span`
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.small};
  line-height: ${LINE_HEIGHTS.defaultSmall};
  font-weight: 500;
  margin-bottom: 4px;

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.default};
    line-height: ${LINE_HEIGHTS.default};
    margin-bottom: 0;
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin-bottom: 12px;
  }
`

const MetaTitle = styled.h3`
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.mediumSmall};
  line-height: ${LINE_HEIGHTS.mediumSmall};
  font-weight: 800;

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.large};
    line-height: 40px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    font-size: ${FONT_SIZES.larger};
    line-height: ${LINE_HEIGHTS.massiveSmall};
  }
`

HomeCard.propTypes = {
  className: PropTypes.string,
  client: PropTypes.string,
  image: PropTypes.object,
  slug: PropTypes.string,
  title: PropTypes.string
}
