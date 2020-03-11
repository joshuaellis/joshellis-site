import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { testMarkdownLink } from 'lib/utils'

import { FONT_FAMILIES, FONT_SIZES, LINE_HEIGHTS, MEDIA_QUERIES } from 'styles'

import MetaItem from './MetaItem'

function MetaData ({ className, children }) {
  return (
    <MetaDataContainer className={className}>
      {children.map(x =>
        x.copy ? (
          <MetaItem title={x.title} key={x.title}>
            {testMarkdownLink(x.copy)}
          </MetaItem>
        ) : null
      )}
    </MetaDataContainer>
  )
}

const MetaDataContainer = styled.div`
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.defaultSmall};
  line-height: ${LINE_HEIGHTS.defaultSmall};
  font-weight: 400;
  display: grid;
  grid-template-areas: 'client client role role' 'studio studio tech tech';
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 32px;
  grid-column-gap: 16px;

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.default};
    line-height: ${LINE_HEIGHTS.default};
    grid-column-gap: 32px;
    grid-row-gap: 56px;
  }
`

MetaData.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
}

export default memo(MetaData)
