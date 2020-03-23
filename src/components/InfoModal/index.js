/**
 *
 * InfoModal
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'

import Text from 'components/Text'
import { testMarkdownLink } from 'lib/utils'
import handleModalScrollling from 'lib/handleModalScrollling'
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES,
  MISC
} from 'styles'

import aboutSerializer from './aboutSerializer'

const renderCollabText = content => {
  const textArr = content.collaboration_text.split(/(\[)/)
  const markdown = testMarkdownLink(textArr.slice(1).join(''))
  return [textArr[0], markdown]
}

function InfoModal ({ className, content, ...restProps }) {
  useEffect(handleModalScrollling, [])

  return (
    <InfoWrapper className={className} {...restProps}>
      <InfoInner>
        <InfoTitles>
          <BlockContent
            blocks={content.copy}
            serializers={aboutSerializer('h2')}
          />
        </InfoTitles>
        <InfoColab className='info-modal__colab'>
          <Text text={renderCollabText(content)}>
            <InfoColabTitle>Collaboration</InfoColabTitle>
          </Text>
        </InfoColab>
      </InfoInner>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
  background-color: ${COLORS.black};
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: ${COLORS.white};
  padding-top: 64px;

  ${MEDIA_QUERIES.tabletUp} {
    padding-top: 88px;
  }
`

const InfoInner = styled.div`
  padding: 0 16px;
  margin-top: 16px;
  margin-bottom: 48px;

  ${MEDIA_QUERIES.tabletUp} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 32px;
    padding: 0 40px;
    margin-top: 40px;
    margin-bottom: 56px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin: 0 auto;
    max-width: ${MISC.maxWidth + MISC.pageGutter * 15}px;
    position: relative;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 32px;
    padding: 0 80px;
    margin-top: 56px;
    margin-bottom: 72px;
  }
`

const InfoTitles = styled.div`
  h2 {
    font-family: ${FONT_FAMILIES.surt};
    font-weight: 400;
    font-size: ${FONT_SIZES.defaultLarge};
    line-height: ${LINE_HEIGHTS.defaultLarge};
  }

  ${MEDIA_QUERIES.tabletUp} {
    grid-column: span 6;

    h2 {
      font-size: ${FONT_SIZES.medium};
      line-height: ${LINE_HEIGHTS.medium};
    }
  }

  ${MEDIA_QUERIES.desktopUp} {
    grid-column: span 7;

    h2 {
      font-size: ${FONT_SIZES.mediumLarge};
      line-height: ${LINE_HEIGHTS.mediumLarge};
    }
  }
`

const InfoColab = styled.div`
  margin-top: 40px;
  max-width: 328px;

  a {
    font-weight: 600;
  }

  p {
    color: ${COLORS.white};
  }

  ${MEDIA_QUERIES.tabletUp} {
    grid-column: 1 / 4;
    margin-top: 64px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin: 0;
    max-width: 352px;
    position: fixed;
    bottom: 72px;
    right: ${MISC.desktopPageGutter}px;
  }

  @media (min-width: ${MISC.maxWidth}px) {
    right: calc(
      ${MISC.desktopPageGutter / 2}px + ((100vw - ${MISC.maxWidth}px) / 2)
    );
  }
`

const InfoColabTitle = styled.h3`
  font-family: ${FONT_FAMILIES.surt};
  font-weight: 800;
  font-size: ${FONT_SIZES.defaultSmall};
  line-height: ${LINE_HEIGHTS.defaultSmall};

  color: white !important;

  & + * {
    background-color: white !important;
  }

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.default};
    line-height: ${LINE_HEIGHTS.default};
  }
`

InfoModal.propTypes = {
  className: PropTypes.string,
  content: PropTypes.object,
  style: PropTypes.object
}

export default InfoModal
