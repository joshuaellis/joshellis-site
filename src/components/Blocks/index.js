/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */

import React, { memo } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';
import Plx from 'react-plx';
import styled from 'styled-components';

import { generateColor } from 'lib/utils';

import InlineImage from 'components/InlineImage';
import FullWidthImage from 'components/FullWidthImage';
import LazyImage, { Image } from 'components/Image';
import { TextHead, TextBody } from 'components/Text';

import {
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES,
  MISC,
} from 'styles';

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
    <ProjectMultipleInline
      parallaxData={[
        {
          start: 'self',
          startOffset: '0',
          end: 'self',
          endOffset: '100%',
          easing: 'easeOutSine',
          properties: [
            {
              startValue: 20,
              endValue: -10,
              property: 'translateY',
              unit: '%',
            },
          ],
        },
      ]}
    >
      <InlineImage
        className="project__multiple-inline"
        color={generateColor(color.rgb, color.alpha)}
        caption={single_image.map(x => x.caption)}
        keys={single_image.map(x => x._key)}
      >
        {single_image.map(({ alt, asset, _key }) => (
          <LazyImage
            className="project__multiple-inline"
            alt={alt}
            img={{ asset }}
            key={_key}
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        ))}
      </InlineImage>
    </ProjectMultipleInline>
  );
};

const CustomImageRenderer = ({
  node: { alt, asset, caption, fullWidth, color, _key },
}) =>
  fullWidth ? (
    <StyledFullWidthImage caption={caption} expandId={_key}>
      <Plx
        parallaxData={[
          {
            start: 'self',
            startOffset: '0',
            end: 'self',
            endOffset: '100%',
            easing: 'easeOutSine',
            properties: [
              {
                startValue: 0,
                endValue: -60,
                property: 'translateY',
                unit: '%',
              },
            ],
          },
        ]}
      >
        <Image
          // className="project__fullwidth__image"
          alt={alt}
          img={{ asset }}
          sizes="100vw"
        />
      </Plx>
    </StyledFullWidthImage>
  ) : (
    <ProjectInlineImage
      className="project__inline"
      parallaxData={[
        {
          start: 'self',
          startOffset: '0',
          end: 'self',
          endOffset: '100%',
          easing: 'easeOutSine',
          properties: [
            {
              startValue: 10,
              endValue: -20,
              property: 'translateY',
              unit: '%',
            },
          ],
        },
      ]}
    >
      <InlineImage
        caption={caption}
        color={generateColor(color.rgb, color.alpha)}
        expandId={_key}
      >
        <LazyImage
          className="project__inline"
          alt={alt}
          img={{ asset }}
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </InlineImage>
    </ProjectInlineImage>
  );

const BlockRenderer = ({ node, children }) => {
  const style = node.style || 'normal';

  if (/^h\d/.test(style)) {
    return (
      <ProjectTextHead>
        <TextHead>{children}</TextHead>
      </ProjectTextHead>
    );
  }

  if (style === 'standfirst') {
    return (
      <StyledStandfirst>
        <StandfirstCopy>{children}</StandfirstCopy>
      </StyledStandfirst>
    );
  }

  return <ProjectTextBody>{children}</ProjectTextBody>;
};

// eslint-disable-next-line react/prop-types
export default memo(({ body }) => (
  <BlockContent
    blocks={body}
    serializers={projectSerializers(React.Fragment)}
  />
));

export const ProjectTextHead = styled.div`
  ${MISC.genericSection};
  margin-top: 32px;
  width: 100%;
  pointer-events: none;

  ${MEDIA_QUERIES.tabletUp} {
    margin-top: 64px;

    & + ${ProjectTextBody} {
      margin-top: -8px;
    }

    & > * {
      grid-column: 1 / 4;
    }
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin-top: 80px;

    & + ${ProjectTextBody} {
      margin-top: -24px;
    }

    & > * {
      grid-column: 1 / 5;
    }
  }
`;

export const ProjectTextBody = styled(TextBody)`
  ${MISC.genericSection};
  margin-bottom: 32px;
  pointer-events: none;

  ${MEDIA_QUERIES.tabletUp} {
    margin-bottom: 64px;
    & > * {
      grid-column: 1 / 4;
    }
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin-bottom: 72px;
    & > * {
      grid-column: 1 / 5;
    }
  }
`;

export const ProjectMultipleInline = styled(Plx)`
  ${ProjectTextBody} + & {
    position: relative;
    z-index: -10;
    margin-top: u(-7);

    ${MEDIA_QUERIES.tabletUp} {
      margin-top: u(-16);
    }

    @include media('>=desktop') {
      margin-top: u(-20);
    }
  }
`;

export const StyledFullWidthImage = styled(FullWidthImage)``;

export const ProjectInlineImage = styled(Plx)`
  ${ProjectTextBody} + & {
    position: relative;
    z-index: -10;
    margin-top: -56px;
  }

  & + ${ProjectTextHead} {
    margin-top: -40px;
  }

  ${MEDIA_QUERIES.tabletUp} {
    ${ProjectTextBody} + & {
      margin-top: -128px;
    }

    & + ${ProjectTextHead} {
      margin-top: -64px;
    }
  }

  @include media('>=desktop') {
    ${ProjectTextBody} + & {
      margin-top: -160px;
    }

    & + ${ProjectTextHead} {
      margin-top: -80px;
    }
  }
`;

export const StyledStandfirst = styled.div`
  ${MISC.genericSection};
  margin-top: u(4);
  margin-bottom: u(4);

  & + ${ProjectTextHead} {
    margin-top: 0;
  }

  ${MEDIA_QUERIES.tabletUp} {
    display: none;
  }
`;

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
`;

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
