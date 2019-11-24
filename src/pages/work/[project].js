/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import sanity from 'lib/client';
import { testMarkdownLink } from 'lib/utils';

import Blocks from 'components/Blocks';
import MetaData from 'components/MetaData';
import LargeUrl from 'components/LargeUrl';
import Portal from 'components/Portal';
import ImageModal from 'components/ImageModal';
import Iframe from 'components/Iframe';

import { setImageModalStateAction } from 'store/actions/projectActions';

const queries = {
  getProject: id =>
    `*[slug == '${id}' && !(_id in path("drafts.**"))]{'share_image': share_image.asset->url, ...}`,
  getNextPrevCard: id =>
    `*[slug == '${id}' && !(_id in path("drafts.**"))]{ card_pagination, title, 'hex': card_color.hex, }`,
};

const renderMeta = ({ client, studio, role, tech }) => [
  { title: 'Client', copy: client },
  { title: 'Studio', copy: studio },
  { title: 'Role', copy: role },
  { title: 'Tech', copy: tech },
];

export function ProjectPage({
  body,
  dispatchSetImageModalState,
  excerpt,
  iframe,
  imageModalId,
  meta,
  showImageModal,
  share_image,
  slug,
  title,
  url,
}) {
  const closeImageModal = () => dispatchSetImageModalState(null, false);
  const getActiveImage = () => {
    // Check the array to see if it gives us a response
    const [initialKey] = body.filter(x => x._key === imageModalId);
    if (!initialKey) {
      /**
       *
       * if we dont get an item we then need to filter the array
       * to only get the blocks that are multiple_image blocks
       * then map that array to only contain our single images
       * by flattening the array we get an array similar to the initial
       * array which we can then just filter as usual. Long, but
       * right now, I can't think of another way.
       *
       */
      const [multipleKey] = body
        .filter(x => x._type === 'multiple_images')
        .map(x => x.single_image)
        .flat()
        .filter(x => x._key === imageModalId);
      return multipleKey;
    }
    return initialKey;
  };

  return (
    <React.Fragment>
      <Head>
        <title>{`${title} | Josh Ellis`}</title>
        <meta property="og:title" content={`${title} | Josh Ellis`} />
        <meta name="description" content={excerpt} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} | Josh Ellis`} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={share_image} />
        <meta property="og:url" content={`www.joshellis.co.uk/work/${slug}`} />
        <meta property="og:site_name" content={`${title} | Josh Ellis`} />
        <meta name="twitter:title" content={`${title} | Josh Ellis`} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={share_image} />
      </Head>
      <main className="project">
        <header className="generic__section project__head">
          <h1 className="project__title">{title}</h1>
          <div className="generic__section project__sub-head">
            <Blocks body={body.slice(0, 1)} />
            <div className="project__divider">
              <div></div>
            </div>
            <MetaData className="project__meta">{renderMeta(meta)}</MetaData>
          </div>
        </header>
        <Blocks body={body} />
        {url ? (
          <div className="generic__section project__url">
            <LargeUrl>{testMarkdownLink(url, false)}</LargeUrl>
          </div>
        ) : null}
        {iframe ? (
          <div className="generic__section project__iframe">
            <Iframe title={`${title} video`} src={iframe} />
          </div>
        ) : null}
      </main>
      <Portal elementId="#modal">
        {showImageModal && (
          <ImageModal
            img={imageModalId ? { ...getActiveImage() } : null}
            onCloseClick={closeImageModal}
          />
        )}
      </Portal>
    </React.Fragment>
  );
}

ProjectPage.getInitialProps = async ({ query, res }) => {
  const { project } = query;
  const [data] = await sanity.fetch(queries.getProject(project));
  if (!data || data.length === 0) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
  }
  const {
    body,
    client,
    excerpt,
    iframe,
    role,
    studio,
    tech,
    title,
    url,
    slug,
    share_image,
  } = data;
  return {
    body,
    excerpt,
    iframe,
    title,
    url,
    slug,
    share_image,
    meta: { client, role, studio, tech },
  };
};

const mapStateToProps = ({ project: { imageModal } }) => ({
  imageModalId: imageModal.imageId,
  showImageModal: imageModal.show,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetImageModalState: (id, show) =>
    dispatch(setImageModalStateAction(id, show)),
});

ProjectPage.propTypes = {
  body: PropTypes.array,
  dispatchSetImageModalState: PropTypes.func,
  excerpt: PropTypes.string,
  iframe: PropTypes.string,
  imageModalId: PropTypes.string,
  meta: PropTypes.object,
  title: PropTypes.string,
  share_image: PropTypes.string,
  slug: PropTypes.string,
  showImageModal: PropTypes.bool,
  url: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectPage);
