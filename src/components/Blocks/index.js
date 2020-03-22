import React, { memo } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TextHead, TextBody } from 'components/Text'

import {
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES,
  MISC
} from 'styles'

import CustomImageRenderer, {
  ProjectInlineImage,
  ProjectFullWidthImage
} from './CustomImageRenderer'
import CustomMultipleImageRenderer, {
  ProjectMultipleInline
} from './CustomMultipleImageRenderer'

const projectSerializers = (container = 'div') => ({
  types: {
    'custom-image': props => CustomImageRenderer(props.node),
    multiple_images: props => CustomMultipleImageRenderer(props.node),
    block: BlockRenderer
  },
  container
})

const BlockRenderer = ({ node, children }) => {
  const style = node.style || 'normal'

  if (/^h\d/.test(style)) {
    return (
      <ProjectTextHead>
        <TextHead>{children}</TextHead>
      </ProjectTextHead>
    )
  }

  if (style === 'standfirst') {
    return (
      <ProjectStandfirst>
        <StandfirstCopy>{children}</StandfirstCopy>
      </ProjectStandfirst>
    )
  }

  return <ProjectTextBody>{children}</ProjectTextBody>
}

function Blocks ({ body }) {
  return (
    <BlockContent
      blocks={body}
      serializers={projectSerializers(React.Fragment)}
    />
  )
}

const ProjectTextBody = styled(TextBody)`
  ${MISC.genericSection};
  margin-bottom: 32px;
  pointer-events: none;

  & + ${ProjectInlineImage} {
    position: relative;
    z-index: -10;
    margin-top: -56px;
  }

  & + ${ProjectMultipleInline} {
    position: relative;
    z-index: -10;
    margin-top: -56px;
  }

  ${MEDIA_QUERIES.tabletUp} {
    margin-bottom: 64px;

    & > * {
      grid-column: 1 / 4;
    }

    & + ${ProjectInlineImage} {
      margin-top: -128px;
    }

    & + ${ProjectMultipleInline} {
      margin-top: -128px;
    }
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin-bottom: 72px;

    & > * {
      grid-column: 1 / 5;
    }

    & + ${ProjectInlineImage} {
      margin-top: -160px;
    }

    & + ${ProjectMultipleInline} {
      margin-top: -160px;
    }
  }
`

const ProjectTextHead = styled.div`
  ${MISC.genericSection};
  margin-top: 32px;
  width: 100%;
  pointer-events: none;

  ${ProjectInlineImage} + & {
    margin-top: -40px;
  }

  ${MEDIA_QUERIES.tabletUp} {
    margin-top: 64px;

  ${ProjectMultipleInline} + & + ${ProjectTextBody} {
      margin-top: -8px;
    }

    ${ProjectInlineImage} + & {
      margin-top: -64px;
    }

    & > * {
      grid-column: 1 / 4;
    }
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin-top: 80px;

    ${ProjectInlineImage} + & {
      margin-top: -80px;
    }

    ${ProjectInlineImage} + & + ${ProjectTextBody} {
      margin-top: -24px;
    }

    & > * {
      grid-column: 1 / 5;
    }
  }
`

const ProjectStandfirst = styled.div`
  ${MISC.genericSection};
  margin-top: 32px;
  margin-bottom: 32px;

  & + ${ProjectTextHead} {
    margin-top: 0;
  }

  ${MEDIA_QUERIES.tabletUp} {
    display: none;
  }
`

const StandfirstCopy = styled.p`
  font-family: ${FONT_FAMILIES.surt};
  font-weight: 400;
  font-size: ${FONT_SIZES.mediumSmall};
  line-height: ${LINE_HEIGHTS.mediumSmall};

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.medium};
    line-height: ${LINE_HEIGHTS.medium};
  }

  ${MEDIA_QUERIES.desktopUp} {
    font-size: ${FONT_SIZES.mediumLarge};
    line-height: ${LINE_HEIGHTS.mediumLarge};
  }
`

BlockRenderer.propTypes = {
  node: PropTypes.object,
  children: PropTypes.array
}

export default memo(Blocks)

export {
  ProjectTextHead,
  ProjectMultipleInline,
  ProjectTextBody,
  ProjectFullWidthImage,
  ProjectInlineImage,
  ProjectStandfirst
}
