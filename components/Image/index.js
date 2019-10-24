/**
 *
 * Image
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { imageUrlFor } from 'lib/images';

import './styles.scss';

const Image = React.forwardRef(
  ({ className, img, sizes, scrollPosition, ...restProps }, ref) => {
    const [loading, setLoading] = useState(true);
    return (
      <LazyLoadImage
        wrapperClassName={clsx('image', loading && 'image--loading', className)}
        src={getURL(img, WIDTH.mobileX1)}
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
        alt={img.alt}
        ref={ref}
        sizes={sizes}
        afterLoad={() => setLoading(false)}
        scrollPosition={scrollPosition}
        {...restProps}
      />
    );
  },
);

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

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.object,
  sizes: PropTypes.string,
  scrollPosition: PropTypes.object,
};

export default memo(Image);
