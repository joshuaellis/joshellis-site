/* eslint-disable camelcase */

import React, { memo } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';

import { generateColor } from 'lib/utils';

import InlineImage from 'components/InlineImage';
import FullWidthImage from 'components/FullWidthImage';
import Image from 'components/Image';

const projectSerializers = (container = 'div') => ({
  types: {
    'custom-image': props => CustomImageRenderer(props),
    multiple_images: props => MultipleImageRenderer(props),
    block: BlockRenderer,
  },
  container,
});

const MultipleImageRenderer = ({ node: { single_image } }) => {
  const { color } = single_image[0];
  return (
    <InlineImage
      className="project__multiple"
      color={generateColor(color.rgb, color.alpha)}
      caption={single_image.map(x => x.caption)}
      keys={single_image.map(x => x._key)}
    >
      {single_image.map(({ alt, asset, _key }) => (
        <Image
          className="project__fullwidth__image"
          alt={alt}
          img={{ asset }}
          key={_key}
          threshold={200}
        />
      ))}
    </InlineImage>
  );
};

const CustomImageRenderer = ({
  node: { alt, asset, caption, fullWidth, color, _key },
}) =>
  fullWidth ? (
    <FullWidthImage
      className="project__fullwidth"
      caption={caption}
      expandId={_key}
    >
      <Image
        className="project__fullwidth__image"
        alt={alt}
        img={{ asset }}
        threshold={400}
        effect="opacity"
        sizes="100vw"
      />
    </FullWidthImage>
  ) : (
    <InlineImage
      className="project__inline"
      caption={caption}
      color={generateColor(color.rgb, color.alpha)}
      expandId={_key}
    >
      <Image
        className="project__inline"
        alt={alt}
        img={{ asset }}
        threshold={200}
        effect="opacity"
        sizes="(max-width: 768px) 100vw, 75vw"
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

export default memo(({ body }) => (
  <BlockContent
    blocks={body}
    serializers={projectSerializers(React.Fragment)}
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
    _key: PropTypes.string,
  }),
};

BlockRenderer.propTypes = {
  node: PropTypes.object,
  children: PropTypes.array,
};
