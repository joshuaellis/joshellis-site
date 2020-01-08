/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import t from 'lib/strings';
import sanity from 'lib/client';

const queries = {
  getProjects: `*[_type == 'playpage' && !(_id in path("drafts.**"))]`,
};

export function Play({ projects }) {
  return (
    <React.Fragment>
      <Head>
        <title>Josh Ellis</title>
        <meta name="description" content={t('meta-description')} />
      </Head>
      <main className="play">{projects}</main>
    </React.Fragment>
  );
}

Play.propTypes = {
  projects: PropTypes.array,
};

Play.getInitialProps = async () => {
  const [data] = await sanity.fetch(queries.getProjects);
  return {
    projects: data,
  };
};

export default Play;
