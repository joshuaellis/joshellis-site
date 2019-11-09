/* eslint-disable camelcase */

import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

import { generateColor } from 'lib/utils';

import InlineImage from 'components/InlineImage';
import FullWidthImage from 'components/FullWidthImage';
import Image from 'components/Image';

const projectSerializers = (container = 'div', imgOnClick = null) => ({
  types: {
    'custom-image': props => CustomImageRenderer(props, imgOnClick),
    multiple_images: props => MultipleImageRenderer(props, imgOnClick),
    block: BlockRenderer,
  },
  container,
});

const MultipleImageRenderer = (
  { node: { single_image } },
  imgOnClick,
  scrollPosition,
) => {
  const { color } = single_image[0];
  return (
    <InlineImage
      className="project__multiple"
      color={generateColor(color.rgb, color.alpha)}
      caption={single_image.map(x => x.caption)}
    >
      {single_image.map(({ alt, asset }) => (
        <Image
          onClick={imgOnClick}
          className="project__fullwidth__image"
          alt={alt}
          img={{ asset }}
          threshold={200}
          scrollPosition={scrollPosition}
        />
      ))}
    </InlineImage>
  );
};

const CustomImageRenderer = (
  { node: { alt, asset, caption, fullWidth, color } },
  imgOnClick,
  scrollPosition,
) =>
  fullWidth ? (
    <FullWidthImage className="project__fullwidth" caption={caption}>
      <Image
        onClick={imgOnClick}
        className="project__fullwidth__image"
        alt={alt}
        img={{ asset }}
        threshold={400}
        effect="opacity"
        sizes="100vw"
        scrollPosition={scrollPosition}
      />
    </FullWidthImage>
  ) : (
    <InlineImage
      className="project__inline"
      caption={caption}
      color={generateColor(color.rgb, color.alpha)}
    >
      <Image
        onClick={imgOnClick}
        className="project__inline"
        alt={alt}
        img={{ asset }}
        threshold={200}
        effect="opacity"
        sizes="(max-width: 768px) 100vw, 75vw"
        scrollPosition={scrollPosition}
      />
    </InlineImage>
  );

const BlockRenderer = ({ node, children }) => {
  const style = node.style || 'normal';
  if (/^h\d/.test(style)) {
    return (
      <div className="generic__section project__text__head">
        <div>
          <h2 className="t-h4">{children}</h2>
          <span className="generic__text__ornament" />
        </div>
      </div>
    );
  }

  if (style === 'standfirst') {
    return (
      <div className="generic__section project__standfirst">
        <p className="t-h3">{children}</p>
      </div>
    );
  }

  return (
    <div className="generic__section project__text__body">
      <p className="t-body">{children}</p>
    </div>
  );
};

export default trackWindowScroll(({ body, imgOnClick, scrollPosition }) => (
  <BlockContent
    blocks={body}
    serializers={projectSerializers(React.Fragment, imgOnClick, scrollPosition)}
  />
));

MultipleImageRenderer.propTypes = {
  node: PropTypes.shape({
    single_image: PropTypes.arrayOf(
      PropTypes.shape({
        alt: PropTypes.string,
        asset: PropTypes.object,
        caption: PropTypes.string,
        color: PropTypes.object,
      }),
    ),
  }),
};

CustomImageRenderer.propTypes = {
  node: PropTypes.shape({
    alt: PropTypes.string,
    asset: PropTypes.object,
    caption: PropTypes.string,
    fullWidth: PropTypes.bool,
    color: PropTypes.object,
  }),
};

BlockRenderer.propTypes = {
  node: PropTypes.object,
  children: PropTypes.array,
};
