import React from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { FormattedMessage } from 'react-intl'
import dynamic from 'next/dynamic'

import { TextTitle } from 'components/Text'
import { ContentHomeSections } from 'components/Content'

import { COLORS, MEDIA_QUERIES } from 'references/styles'
import { FONT_STYLE_SURT_40_400 } from 'references/styles/fonts'

const DynamicHapticCanvas = dynamic(() => import('components/HapticCanvas'), {
  ssr: false,
})

const HomePage = () => {
  return (
    <Home>
      <FormattedMessage id="meta-title">
        {(titleStr) => (
          <FormattedMessage id="meta-description">
            {(descriptionStr) => (
              <NextSeo
                title={titleStr}
                titleTemplate="%s"
                description={descriptionStr}
              />
            )}
          </FormattedMessage>
        )}
      </FormattedMessage>
      <HomeGrid>
        <HomeContent>
          <header>
            <HomeTitle tag="h1" fontStyle={FONT_STYLE_SURT_40_400}>
              <FormattedMessage id="title" />
              <HomeSubtitle>
                <FormattedMessage id="subtitle" />
              </HomeSubtitle>
            </HomeTitle>
          </header>
          <ContentHomeSections />
        </HomeContent>
      </HomeGrid>
      <HapticBackground>
        <DynamicHapticCanvas />
      </HapticBackground>
    </Home>
  )
}

export default HomePage

const Home = styled.main`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  background-color: ${COLORS.white};
  position: relative;
  z-index: 0;
  overflow: scroll;

  ${MEDIA_QUERIES.tabletUp} {
    overflow: hidden;
  }
`

const HomeTitle = styled(TextTitle)`
  margin-bottom: 4rem;

  ${MEDIA_QUERIES.tabletUp} {
    margin-bottom: 6.4rem;
  }
`

const HomeSubtitle = styled.span``

const HapticBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`

const HomeGrid = styled.div`
  padding: 2rem 2.5rem 4rem;

  ${MEDIA_QUERIES.tabletUp} {
    max-height: calc(100vh);
    overflow: scroll;
    padding: 3.6rem 5.2rem 8rem;
  }

  ${MEDIA_QUERIES.desktopUp} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`

const HomeContent = styled.article`
  grid-column: span 6;
  user-select: none;
  padding-bottom: 5.6rem;
`
