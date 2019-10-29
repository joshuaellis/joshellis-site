import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

import Standfirst from 'components/Standfirst';
import ProjectList from 'components/ProjectList';

import t from 'lib/strings';
import sanity from 'lib/client';
import buildProjectList from 'lib/buildProjectList';
import { testMarkdownLink } from 'lib/utils';

const queries = {
  getProjectList: `*[_type == 'project' && !(_id in path("drafts.**"))]{ title, year, slug }`,
  getStandfirst: `*[_type == 'homepage' && !(_id in path("drafts.**"))]{ standfirst }`,
};

const homeSerializers = (container = 'div') => ({
  types: {},
  marks: {
    // eslint-disable-next-line react/prop-types
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
    <>
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
    </>
  );
}

Home.propTypes = {
  projects: PropTypes.array,
  blocks: PropTypes.array,
};

Home.getInitialProps = async () => {
  const data = await sanity.fetch(queries.getProjectList);
  const [{ standfirst }] = await sanity.fetch(queries.getStandfirst);
  return {
    projects: buildProjectList(data),
    blocks: standfirst,
  };
};

export default Home;
