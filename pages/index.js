import React from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { FormattedMessage } from 'react-intl'

import { TextTitle } from 'components/Text'
import { ButtonSimple } from 'components/Button'
import { ContentHomeSections } from 'components/Content'

import { COLORS, MEDIA_QUERIES } from 'references/styles'
import { FONT_STYLE_SURT_40_400 } from 'references/styles/fonts'

const HomePage = () => {
  return (
    <Home>
      <FormattedMessage id='meta-title'>
        {titleStr => (
          <FormattedMessage id='meta-description'>
            {descriptionStr => (
              <NextSeo
                title={titleStr}
                titleTemplate='%s'
                description={descriptionStr}
              />
            )}
          </FormattedMessage>
        )}
      </FormattedMessage>
      <HomeContent>
        <header>
          <HomeTitle tag='h1' fontStyle={FONT_STYLE_SURT_40_400}>
            <FormattedMessage id='title' />
            <HomeSubtitle>
              <FormattedMessage id='subtitle' />
            </HomeSubtitle>
          </HomeTitle>
        </header>
        <ContentHomeSections />
      </HomeContent>
      <HomeContactButton tag='a' href='mailto:hello@joshellis.co.uk'>
        Get in touch
      </HomeContactButton>
    </Home>
  )
}

export default HomePage

const Home = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.white};
  padding: 2rem 3.2rem 4rem;
  position: relative;
  z-index: 0;

  ${MEDIA_QUERIES.tabletUp} {
    padding: 3.6rem 5.2rem 8rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`

const HomeTitle = styled(TextTitle)`
  margin-bottom: 6.4rem;
`

const HomeSubtitle = styled.span``

const HomeContactButton = styled(ButtonSimple)`
  display: inline-block;
  cursor: pointer;
  position: absolute;
  bottom: 8rem;
  left: 5.2rem;
  z-index: 1;
`

const HomeContent = styled.article`
  grid-column: span 6;
  user-select: none;
`
