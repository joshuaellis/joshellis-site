/**
 *
 * Image
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

import { imageUrlFor } from 'lib/images';

import Loader from 'components/Loader';

import { MEDIA_QUERIES } from 'styles';

const LazyImage = ({ className, img, sizes, scrollPosition, ...restProps }) => {
  const [loading, setLoading] = useState(true);
  return (
    <ImageContainer className={clsx(loading && 'image--loading')}>
      {loading && <ImageLoader size="32px" />}
      <StyledLazyImage
        wrapperClassName={className}
        src={getURL(img, WIDTH.deskX2)}
        srcSet={`
          ${getURL(img, WIDTH.deskX2)} ${WIDTH.deskX2}w,
          ${getURL(img, WIDTH.deskX1)} ${WIDTH.deskX1}w,
          ${getURL(img, WIDTH.tabletX2)} ${WIDTH.tabletX2}w,
          ${getURL(img, WIDTH.tabletX1)} ${WIDTH.tabletX1}w,
          ${getURL(img, WIDTH.largeMobileX2)} ${WIDTH.largeMobileX2}w,
          ${getURL(img, WIDTH.largeMobileX1)} ${WIDTH.largeMobileX1}w,
          ${getURL(img, WIDTH.mobileX2)} ${WIDTH.mobileX2}w,
          ${getURL(img, WIDTH.mobileX1)} ${WIDTH.mobileX1}w,
        `}
        alt={img.alt || ''}
        sizes={sizes}
        afterLoad={() => setLoading(false)}
        scrollPosition={scrollPosition}
        threshold={600}
        {...restProps}
      />
    </ImageContainer>
  );
};

export const Image = ({ className, img, sizes, ...restProps }) => (
  <StyledImage
    className={className}
    src={getURL(img, WIDTH.deskX2)}
    srcSet={`
      ${getURL(img, WIDTH.deskX2)} ${WIDTH.deskX2}w,
      ${getURL(img, WIDTH.deskX1)} ${WIDTH.deskX1}w,
      ${getURL(img, WIDTH.tabletX2)} ${WIDTH.tabletX2}w,
      ${getURL(img, WIDTH.tabletX1)} ${WIDTH.tabletX1}w,
      ${getURL(img, WIDTH.largeMobileX2)} ${WIDTH.largeMobileX2}w,
      ${getURL(img, WIDTH.largeMobileX1)} ${WIDTH.largeMobileX1}w,
      ${getURL(img, WIDTH.mobileX2)} ${WIDTH.mobileX2}w,
      ${getURL(img, WIDTH.mobileX1)} ${WIDTH.mobileX1}w,
    `}
    alt={img.alt || ''}
    sizes={sizes}
    {...restProps}
  />
);

const ImageContainer = styled.div`
  &.image--loading {
    display: block;
    background-color: rgba(255, 255, 255, 0.4);
    position: relative;

    &:before {
      display: block;
      content: '';
      width: 100%;
      padding-top: (3 / 2) * 100%;
    }

    ${StyledImage},
    ${StyledLazyImage},
    iframe {
      position: absolute;
      top: 0;
      left: 0;
    }

    ${MEDIA_QUERIES.desktopUp} {
      .fullwidthimage & {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
      }
    }
  }
`;

const ImageLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
`;

const StyledImage = styled.img``;

const StyledLazyImage = styled(LazyLoadImage)``;

const WIDTH = {
  deskX2: 2560,
  deskX1: 1280,
  tabletX2: 1536,
  tabletX1: 768,
  largeMobileX2: 1080,
  largeMobileX1: 540,
  mobileX2: 750,
  mobileX1: 375,
};

const getURL = (img, size) =>
  imageUrlFor(img)
    .auto('format')
    .width(size)
    .url();

LazyImage.propTypes = {
  className: PropTypes.string,
  img: PropTypes.object,
  sizes: PropTypes.string,
  scrollPosition: PropTypes.object,
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.object,
  sizes: PropTypes.string,
};

export default memo(LazyImage);
