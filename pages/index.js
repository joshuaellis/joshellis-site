/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import { connect } from 'react-redux';

import Standfirst from 'components/Standfirst';
import ProjectList from 'components/ProjectList';

import t from 'lib/strings';
import sanity from 'lib/client';
import { testMarkdownLink } from 'lib/utils';

const queries = {
  getStandfirst: `*[_type == 'homepage' && !(_id in path("drafts.**"))]{ standfirst }`,
};

const homeSerializers = (container = 'div') => ({
  types: {
    block: ({ children }) => <span>{children}</span>,
  },
  marks: {
    color: ({ mark, children }) => (
      <span className="generic__colour-text" style={{ color: mark.hex }}>
        {testMarkdownLink(children[0])}
      </span>
    ),
  },
  container,
});

export function Home({ blocks, projects }) {
  return (
    <React.Fragment>
      <Head>
        <title>Josh Ellis</title>
        <meta name="description" content={t('meta-description')} />
      </Head>
      <main className="home">
        <Standfirst>
          <BlockContent blocks={blocks} serializers={homeSerializers('h2')} />
        </Standfirst>
        <ProjectList data={projects} />
      </main>
    </React.Fragment>
  );
}

Home.propTypes = {
  projects: PropTypes.array,
  blocks: PropTypes.array,
};

Home.getInitialProps = async () => {
  const [{ standfirst }] = await sanity.fetch(queries.getStandfirst);
  return {
    blocks: standfirst,
  };
};

const mapStateToProps = ({ global: { projectList } }) => ({
  projects: projectList,
});

export default connect(
  mapStateToProps,
  null,
)(Home);
