import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageExpandButton from 'components/ImageExpandButton';

import { FONT_FAMILIES, FONT_SIZES, LINE_HEIGHTS, MEDIA_QUERIES } from 'styles';

export default function ImageContainer({
  caption,
  children,
  id,
  onImageExpandClick,
}) {
  const handleExpandClick = e => {
    if (onImageExpandClick) {
      onImageExpandClick(e);
    }
  };

  return (
    <ImageInner>
      <ImageExpandButton
        className="inline-image__expand"
        id={id}
        onClick={handleExpandClick}
      />
      <ImageWrapper>{children}</ImageWrapper>
      <ImageCaption>{caption}</ImageCaption>
    </ImageInner>
  );
}

export const ImageInner = styled.div`
  position: relative;

  .inline-image__expand {
    position: absolute;
    right: 0;

    ${MEDIA_QUERIES.desktopUp} {
      display: none;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const ImageCaption = styled.p`
  margin-top: 4px;
  font-family: ${FONT_FAMILIES.surt};
  font-weight: 500;
  font-size: ${FONT_SIZES.small};
  line-height: ${LINE_HEIGHTS.defaultSmall};

  ${MEDIA_QUERIES.tabletUp} {
    text-align: right;
    margin-top: 8px;
    font-size: ${FONT_SIZES.defaultSmall};
    line-height: ${LINE_HEIGHTS.default};
  }
`;

ImageContainer.propTypes = {
  caption: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.element,
  onImageExpandClick: PropTypes.func,
};
