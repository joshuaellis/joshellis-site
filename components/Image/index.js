/**
 *
 * Image
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { imageUrlFor } from 'lib/images';

import './styles.scss';

function Image({ className, img, ...restProps }) {
  return (
    <picture>
      <source
        srcSet={imageUrlFor(img)
          .auto('format')
          .focalPoint(img.hotspot.x, img.hotspot.y)
          .crop('focalpoint')
          .width(960)
          .url()}
        media="(min-width: 320px)"
      />
      <source
        srcSet={imageUrlFor(img)
          .auto('format')
          .focalPoint(img.hotspot.x, img.hotspot.y)
          .crop('focalpoint')
          .width(1536)
          .url()}
        media="(min-width: 540px)"
      />
      <source
        srcSet={imageUrlFor(img)
          .auto('format')
          .focalPoint(img.hotspot.x, img.hotspot.y)
          .crop('focalpoint')
          .width(2048)
          .url()}
        media="(min-width: 768px)"
      />
      <source
        srcSet={imageUrlFor(img)
          .auto('format')
          .focalPoint(img.hotspot.x, img.hotspot.y)
          .crop('focalpoint')
          .url()}
        media="(min-width: 1024px)"
      />
      <img
        className={clsx('image', className)}
        src={imageUrlFor(img)
          .auto('format')
          .focalPoint(img.hotspot.x, img.hotspot.y)
          .crop('focalpoint')
          .url()}
        alt={img.alt}
        {...restProps}
      />
    </picture>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.object,
};

export default memo(Image);
