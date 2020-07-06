import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import t from 'lib/strings'

import Canvas from 'components/Canvas'

export default function Home ({ projectCards }) {
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
      </HomeMain>
    </>
  )
}

const HomeMain = styled.main`
  height: 100vh;
  width: 100vw;
`

const HomeCanvas = styled(Canvas)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
