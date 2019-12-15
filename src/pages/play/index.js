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
        <a
          style={{
            position: 'absolute',
            top: '140px',
            left: '140px',
            color: 'white',
            fontSize: '80px',
          }}
          href="static/circlewave/index.html"
        >
          CIRCLE WAVE
        </a>
      </main>
    </React.Fragment>
  );
}

Play.propTypes = {};

export default Play;
