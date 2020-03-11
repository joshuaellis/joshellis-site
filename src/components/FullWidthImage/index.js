import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styled from 'styled-components'

import ImageExpandButton from 'components/ImageExpandButton'
import { setImageModalStateAction } from 'store/actions/projectActions'

import { FONT_FAMILIES, FONT_SIZES, LINE_HEIGHTS, MEDIA_QUERIES } from 'styles'

function FullWidthImage ({
  children,
  caption,
  className,
  expandId,
  ...restProps
}) {
  const dispatch = useDispatch()
  const handleExpandClick = e =>
    dispatch(
      setImageModalStateAction(
        e.currentTarget.getAttribute('data-modal-id'),
        true
      )
    )

  return (
    <FullWidthImageContainer
      className={clsx('fullwidthimage', className)}
      {...restProps}
    >
      <ImageExpandButton
        className='fullwidthimage__expand'
        id={expandId}
        onClick={handleExpandClick}
      />
      <FullImage>{children}</FullImage>
      <ImageCaption>{caption}</ImageCaption>
    </FullWidthImageContainer>
  )
}

export const FullWidthImageContainer = styled.div`
  width: 100%;
  display: block;

  .fullwidthimage__expand {
    position: absolute;
    right: 0;
    z-index: 10;

    ${MEDIA_QUERIES.desktopUp} {
      display: none;
    }
  }
`

const FullImage = styled.div`
  max-height: 200px;
  overflow: hidden;

  ${MEDIA_QUERIES.tabletUp} {
    max-height: 400px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    max-height: 600px;
  }
`

const ImageCaption = styled.p`
  margin: 4px 16px 0 16px;
  font-family: ${FONT_FAMILIES.surt};
  font-weight: 500;
  font-size: ${FONT_SIZES.small};
  line-height: ${LINE_HEIGHTS.defaultSmall};

  ${MEDIA_QUERIES.tabletUp} {
    margin: 8px 40px 0 40px;
    font-size: ${FONT_SIZES.defaultSmall};
    line-height: ${LINE_HEIGHTS.default};
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin: 8px 32px 0 32px;
  }
`

FullWidthImage.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  caption: PropTypes.string,
  expandId: PropTypes.string
}

export default memo(FullWidthImage)
