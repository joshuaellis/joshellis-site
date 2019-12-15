/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import t from 'lib/strings';

export function Play() {
  return (
    <React.Fragment>
      <Head>
        <title>Play | Josh Ellis</title>
        <meta name="description" content={t('meta-description')} />
      </Head>
      <main className="play">
        <div></div>
      </main>
    </React.Fragment>
  );
}

Play.propTypes = {};

export default Play;
