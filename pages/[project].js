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
import Modal from 'components/Modal';

const queries = {
  getProject: id => `*[slug == '${id}' && !(_id in path("drafts.**"))]`,
};

const renderMeta = ({ client, studio, role, tech }) => [
  { title: 'Client', copy: client },
  { title: 'Studio', copy: studio },
  { title: 'Role', copy: role },
  { title: 'Tech', copy: tech },
];

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
        <Blocks body={body} />
        {url ? (
          <div className="project__url">
            <LargeUrl>{testMarkdownLink(url, false)}</LargeUrl>
          </div>
        ) : null}
      </main>
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
  const { body, client, excerpt, role, studio, tech, title, url } = data;
  return { body, excerpt, title, url, meta: { client, role, studio, tech } };
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

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
