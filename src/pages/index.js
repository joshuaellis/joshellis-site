import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import t from 'lib/strings'

import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES
} from 'styles'

import Canvas from 'components/Canvas'

export default function Home () {
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
        <HomeCanvas />
        <HomeAboutMe>
          <HomeTitle>Hey, I'm Josh</HomeTitle>
          <HomeSubtitle>I'm a frontend developer & creative coder</HomeSubtitle>
          <HomeSubSubtitle>
            I currently work at{' '}
            <HomeAnchor
              rel='noopener'
              target='blank'
              href='https://www.sennep.com'
            >
              Sennep
            </HomeAnchor>
          </HomeSubSubtitle>
          <FooterList>
            <FooterItem>
              <h4>
                <Link href='/work' passHref>
                  <FooterAnchor href='/work'>View work</FooterAnchor>
                </Link>
              </h4>
            </FooterItem>
            <FooterItem>
              <h4>
                <FooterAnchor
                  rel='noopener'
                  target='_blank'
                  href='mailto:joshua.ellis18@gmail.com?Subject=Hello%20there'
                >
                  {t('contact-title')}
                </FooterAnchor>
              </h4>
            </FooterItem>
            <FooterItem>
              <h4>
                <FooterAnchor
                  rel='noopener'
                  target='_blank'
                  href='https://www.instagram.com/planet_josh'
                >
                  {t('instagram-title')}
                </FooterAnchor>
              </h4>
            </FooterItem>
            <FooterItem>
              <h4>
                <FooterAnchor
                  rel='noopener'
                  target='_blank'
                  href='https://www.linkedin.com/in/joshua-ellis-66b362114/'
                >
                  {t('linkedin-title')}
                </FooterAnchor>
              </h4>
            </FooterItem>
          </FooterList>
        </HomeAboutMe>
      </HomeMain>
    </>
  )
}

const HomeMain = styled.main`
  height: 100vh;
  width: 100vw;
  z-index: 0;
  position: relative;
  overflow: hidden;
`

const HomeCanvas = styled(Canvas)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`

const HomeAboutMe = styled.div`
  position: absolute;
  z-index: 1;
  max-width: 100%;
  max-height: calc(100% - 8rem);
  overflow: scroll;
  margin: 4rem 2rem;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2rem 3rem;

  ${MEDIA_QUERIES.tabletUp} {
    max-width: 600px;
    margin: 6rem 4rem;
    padding: 4rem 6rem;
  }
`

const HomeTitle = styled.h1`
  font-family: ${FONT_FAMILIES.surt};
  font-weight: 800;
  font-size: ${FONT_SIZES.massiveSmall};
  line-height: ${LINE_HEIGHTS.massiveSmall};
  color: ${COLORS.black};
  margin-bottom: 2.5rem;
`

const HomeSubtitle = styled.h2`
  font-family: ${FONT_FAMILIES.surt};
  font-weight: 800;
  font-size: ${FONT_SIZES.mediumLarge};
  line-height: ${LINE_HEIGHTS.mediumLarge};
  color: ${COLORS.black};
  margin-bottom: 2.5rem;
`

const HomeSubSubtitle = styled.h3`
  font-family: ${FONT_FAMILIES.surt};
  font-weight: 800;
  font-size: ${FONT_SIZES.mediumLarge};
  line-height: ${LINE_HEIGHTS.mediumLarge};
  color: ${COLORS.black};
  margin-bottom: 2.5rem;
`

const FooterList = styled.ul`
  padding: 0;
`

const FooterItem = styled.li`
  margin: 1.2rem 0;
`

const HomeAnchor = styled.a`
  position: relative;
  display: inline;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    height: 8px;
    width: 100%;
    background: ${COLORS.black};
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`

const FooterAnchor = styled.a`
  text-decoration: none;
  position: relative;
  display: inline-block;
  color: ${COLORS.black};
`
