/* eslint-disable camelcase */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BlockContent from '@sanity/block-content-to-react';
import LazyLoad from 'react-lazy-load';

import sanity from 'lib/client';
import { generateColor, testMarkdownLink } from 'lib/blocks';

import MetaData from 'components/MetaData';
import LargeUrl from 'components/LargeUrl';
import Portal from 'components/Portal';
import Modal from 'components/Modal';
import InlineImage from 'components/InlineImage';
import FullWidthImage from 'components/FullWidthImage';
import Image from 'components/Image';

const queries = {
  getProject: id => `*[slug == '${id}' && !(_id in path("drafts.**"))]`,
};

const renderMeta = ({ client, studio, role, tech }) => [
  { title: 'Client', copy: client },
  { title: 'Studio', copy: studio },
  { title: 'Role', copy: role },
  { title: 'Tech', copy: tech },
];

const projectSerializers = (container = 'div', imgOnClick = null) => ({
  types: {
    'custom-image': props => CustomImageRenderer(props, imgOnClick),
    multiple_images: props => MultipleImageRenderer(props, imgOnClick),
    block: BlockRenderer,
  },
  container,
});

export function ProjectPage({ body, excerpt, meta, title, url }) {
  return (
    <React.Fragment>
      <Head>
        <title>{`${title} | Josh Ellis`}</title>
        <meta name="description" content={excerpt}></meta>
      </Head>
      <main className="project">
        <h1 className="project__title">{title}</h1>
        <MetaData className="project__meta">{renderMeta(meta)}</MetaData>
        <BlockContent
          blocks={body}
          serializers={projectSerializers(React.Fragment)}
        />
        {url ? (
          <LargeUrl className="project__url">
            {testMarkdownLink(url, false)}
          </LargeUrl>
        ) : null}
      </main>
    </React.Fragment>
  );
}

const MultipleImageRenderer = ({ node: { single_image } }, imgOnClick) => {
  const { color } = single_image[0];
  return (
    <InlineImage
      className="project__multiple"
      color={generateColor(color.rgb, color.alpha)}
      caption={single_image.map(x => x.caption)}
    >
      {single_image.map(({ alt, asset }) => (
        <LazyLoad key={alt} offset={200}>
          <Image
            onClick={imgOnClick}
            className="project__fullwidth__image"
            alt={alt}
            img={{ asset }}
          />
        </LazyLoad>
      ))}
    </InlineImage>
  );
};

const CustomImageRenderer = (
  { node: { alt, asset, caption, fullWidth, color } },
  imgOnClick,
) =>
  fullWidth ? (
    <FullWidthImage className="project__fullwidth" caption={caption}>
      <LazyLoad offset={200}>
        <Image
          onClick={imgOnClick}
          className="project__fullwidth__image"
          alt={alt}
          img={{ asset }}
        />
      </LazyLoad>
    </FullWidthImage>
  ) : (
    <InlineImage
      className="project__inline"
      caption={caption}
      color={generateColor(color.rgb, color.alpha)}
    >
      <LazyLoad offset={200}>
        <Image
          onClick={imgOnClick}
          className="project__inline"
          alt={alt}
          img={{ asset }}
        />
      </LazyLoad>
    </InlineImage>
  );

const BlockRenderer = ({ node, children }) => {
  const style = node.style || 'normal';
  if (/^h\d/.test(style)) {
    return (
      <div className="project__text__head">
        <h2 className="t-h4">{children}</h2>
        <span className="generic__text__ornament" />
      </div>
    );
  }

  if (style === 'standfirst') {
    return <p className="project__standfirst t-h3">{children}</p>;
  }

  return <p className="project__text__body t-body">{children}</p>;
};

ProjectPage.getInitialProps = async ({ query, res }) => {
  const { project } = query;
  const [data] = await sanity.fetch(queries.getProject(project));
  if (!data || data.length === 0) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
  }
  const { body, client, excerpt, role, studio, tech, title, url } = data;
  return { body, excerpt, title, url, meta: { client, role, studio, tech } };
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

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

ProjectPage.propTypes = {
  body: PropTypes.array,
  excerpt: PropTypes.string,
  meta: PropTypes.object,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectPage);
