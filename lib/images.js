/* eslint-disable no-underscore-dangle */
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../lib/client';

export const imageUrlFor = source =>
  imageUrlBuilder(sanityClient).image(buildImageObj(source));

function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}
