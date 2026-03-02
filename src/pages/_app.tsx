import { generateDefaultSeo } from 'next-seo/pages'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Head from 'next/head'

import { globalStyles } from 'styles/global'

const SEO = {
  title: 'Josh Ellis',
  description: '',
  titleTemplate: '%s – Josh Ellis',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.joshellis.co.uk/',
    site_name: 'Josh Ellis',
    images: [
      {
        url: '',
        width: 0,
        height: 0,
        alt: '',
      },
    ],
  },
  twitter: {
    handle: '@_josh_ellis_',
    site: '@_josh_ellis_',
    cardType: 'summary_large_image',
  },
}

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  return (
    <>
      <Head>{generateDefaultSeo(SEO)}</Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
