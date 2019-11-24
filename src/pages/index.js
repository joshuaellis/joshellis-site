/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Standfirst from 'components/Standfirst';
import Card from 'components/Card';

import t from 'lib/strings';
import sanity from 'lib/client';
import { removeMarkdown } from 'lib/utils';

const queries = {
  getProjectCards: `*[_type == 'projectStructure']{
    'projects':projects[]{
      'year':year_title,
      'projects':year_project[]->{card_home, title, slug, client}
    }
  }`,
};

export function Home({ projectCards }) {
  return (
    <React.Fragment>
      <Head>
        <title>Josh Ellis</title>

        <meta name="description" content={t('meta-description')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('meta-title')} />
        <meta property="og:description" content={t('meta-share')} />
        <meta property="og:image" content="" />
        <meta property="og:url" content={t('meta-url')} />
        <meta property="og:site_name" content={t('site-title')} />

        <meta name="twitter:title" content={t('meta-title')} />
        <meta name="twitter:description" content={t('meta-share')} />
        <meta name="twitter:image" content="" />
      </Head>
      <main className="home">
        <Standfirst />
        <div className="home__cards">
          {projectCards.map(year => (
            <div key={year.year} className="home__cards__block">
              <span className="home__cards__year t-small-body">
                {year.year}
              </span>
              <div className="home__cards__grid">
                {year.projects.map(project => (
                  <Card
                    key={project.slug}
                    className="home__card"
                    client={removeMarkdown(project.client)}
                    image={project.card_home}
                    slug={`work/${project.slug}`}
                    title={project.title}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </React.Fragment>
  );
}

Home.propTypes = {
  projectCards: PropTypes.array,
};

Home.getInitialProps = async () => {
  const [{ projects }] = await sanity.fetch(queries.getProjectCards);
  return {
    projectCards: projects,
  };
};

export default connect(
  null,
  null,
)(Home);
