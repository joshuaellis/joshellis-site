/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { Image } from 'components/Image';

import t from 'lib/strings';
import sanity from 'lib/client';

const queries = {
  getPlayCards: `*[_type == 'playpage']{
    'projects':[...work]{
      play_gif,
      play_slug,
    }
  }`,
};

export function Play({ projects = [] }) {
  const title = 'Play | Josh Ellis';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={t('meta-description')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={t('meta-share')} />
        <meta property="og:image" content="/home_share.png" />
        <meta property="og:url" content={`${t('meta-url')}/play`} />
        <meta property="og:site_name" content={t('site-title')} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={t('meta-share')} />
        <meta name="twitter:image" content="/home_share.png" />
      </Head>
      <main>
        <div className="play__bg"></div>
        {projects.map(({ img, href }) => (
          <a key={href} href={`/play/${href}`}>
            <Image img={img} sizes="(max-width: 768px) 100vw, 50vw" />
          </a>
        ))}
      </main>
    </React.Fragment>
  );
}

Play.getInitialProps = async () => {
  const [{ projects }] = await sanity.fetch(queries.getPlayCards);
  return {
    projects: projects.map(x => ({
      href: x.play_slug,
      img: x.play_gif,
    })),
  };
};

Play.propTypes = {
  projects: PropTypes.array,
};

export default Play;
