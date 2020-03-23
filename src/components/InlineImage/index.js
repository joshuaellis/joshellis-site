import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styled from 'styled-components'

import { setImageModalStateAction } from 'store/actions/projectActions'

import { MEDIA_QUERIES, MISC } from 'styles'

import ImageContainer, { ImageInner } from './ImageContainer'

function InlineImage ({
  caption,
  children,
  className,
  color,
  expandId,
  keys,
  style,
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
    <InlineImageRoot
      className={clsx(
        children && children.length > 1 && 'inlineimage--multiple',
        className
      )}
      style={{ backgroundColor: color, ...style }}
      {...restProps}
    >
      <InlineImageContainer>
        {children && children.length > 1 ? (
          // handles multiple images in the same container
          children.map((x, i) => (
            <ImageContainer
              caption={caption[i]}
              id={keys[i]}
              key={caption[i]}
              onImageExpandClick={handleExpandClick}
            >
              {x}
            </ImageContainer>
          ))
        ) : (
          <ImageContainer
            caption={caption}
            id={expandId}
            onImageExpandClick={handleExpandClick}
          >
            {children}
          </ImageContainer>
        )}
      </InlineImageContainer>
    </InlineImageRoot>
  )
}

const InlineImageRoot = styled.div`
  width: 100%;
  padding-top: 56px;
  padding-bottom: 64px;

  ${MEDIA_QUERIES.tabletUp} {
    padding-top: 40px;
    padding-bottom: 56px;
  }
`

const InlineImageContainer = styled.div`
  padding: 0 16px;

  > ${ImageInner} + ${ImageInner} {
    margin-top: 40px;
  }

  ${MEDIA_QUERIES.tabletUp} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 32px;
    padding: 0 40px;

    > ${ImageInner} {
      grid-column: 3 / 7;
    }
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin: 0 auto;
    max-width: ${MISC.maxWidth + MISC.pageGutter * 5}px;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 32px;
    padding: 0 80px;

    > ${ImageInner} {
      grid-column: 4 / 13;
    }

    > ${ImageInner} + ${ImageInner} {
      margin-top: 56px;
    }
  }
`

InlineImage.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  className: PropTypes.string,
  color: PropTypes.string,
  expandId: PropTypes.string,
  expandClick: PropTypes.func,
  keys: PropTypes.array,
  style: PropTypes.object
}

InlineImage.defaultProps = {
  color: 'transparent',
  style: {}
}

export default memo(InlineImage)
