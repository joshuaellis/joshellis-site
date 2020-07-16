import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MISC,
  MEDIA_QUERIES
} from 'styles'

import Standfirst from 'components/Standfirst'
import Card from 'components/Card'

import t from 'lib/strings'
import sanity from 'lib/client'
import { removeMarkdown } from 'lib/utils'

const queries = {
  getProjectCards: `*[_type == 'projectStructure']{
    'projects':projects[]{
      'year':year_title,
      'projects':year_project[]->{card_home, title, slug, client}
    }
  }`
}

export function WorkHome ({ projectCards }) {
  return (
    <>
      <Head>
        <title>Josh Ellis</title>
        <meta name='description' content={t('meta-description')} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={t('meta-title')} />
        <meta property='og:description' content={t('meta-share')} />
        <meta property='og:image' content='/home_share.png' />
        <meta property='og:url' content={t('meta-url')} />
        <meta property='og:site_name' content={t('site-title')} />
        <meta name='twitter:title' content={t('meta-title')} />
        <meta name='twitter:description' content={t('meta-share')} />
        <meta name='twitter:image' content='/home_share.png' />
      </Head>
      <HomeMain>
        <Standfirst />
        <HomeCardGrid>
          {projectCards.map(year => (
            <HomeCard key={year.year}>
              <YearTitle className='home__cards__year t-small-body'>
                {year.year}
              </YearTitle>
              <YearCardsGrid>
                {year.projects.map(project => (
                  <Card
                    key={project.slug}
                    className='home__card'
                    client={removeMarkdown(project.client)}
                    image={project.card_home}
                    slug={`work/${project.slug}`}
                    title={project.title}
                  />
                ))}
              </YearCardsGrid>
            </HomeCard>
          ))}
        </HomeCardGrid>
      </HomeMain>
    </>
  )
}

WorkHome.propTypes = {
  projectCards: PropTypes.array
}

export async function getStaticProps () {
  const [{ projects }] = await sanity.fetch(queries.getProjectCards)
  return {
    props: {
      projectCards: projects
    }
  }
}

export default WorkHome

const HomeMain = styled.main`
  padding-top: ${MISC.mobileHeaderHeight}px;
  z-index: 0;

  > .project-list {
    margin-top: 24px;
  }

  ${MEDIA_QUERIES.tabletUp} {
    padding-top: ${MISC.tabletHeaderHeight}px;

    > .project-list {
      margin-top: 32px;
    }
  }

  ${MEDIA_QUERIES.desktopUp} {
    padding-top: ${MISC.desktopHeaderHeight}px;

    > .project-list {
      margin-top: 48px;
    }
  }
`

const HomeCard = styled.div`
  & + & {
    margin-top: 24px;
  }

  ${MEDIA_QUERIES.tabletUp} {
    & + & {
      margin-top: 48px;
    }
  }
`

const HomeCardGrid = styled.div`
  margin: 88px 16px 0 16px;

  ${MEDIA_QUERIES.tabletUp} {
    margin: 124px 40px 32px 40px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin: 140px auto 72px auto;
    padding: 0 80px;
    max-width: ${MISC.maxWidth + MISC.pageGutter * 15}px;
  }
`

const YearTitle = styled.span`
  font-family: ${FONT_FAMILIES.surt};
  font-weight: 400;
  font-size: ${FONT_SIZES.defaultSmall};
  line-height: ${LINE_HEIGHTS.defaultSmall};
  padding: 6px 12px;
  background-color: #ebebeb;

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.default};
    line-height: ${LINE_HEIGHTS.default};
    padding: 8px 16px;
  }
`

const YearCardsGrid = styled.div`
  margin-top: 16px;

  > .home__card + .home__card {
    margin-top: 20px;
  }

  ${MEDIA_QUERIES.tabletUp} {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;

    > .home__card + .home__card {
      margin-top: 0;
    }
  }

  @media (min-width: ${MISC.maxWidth}px) {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }
`
