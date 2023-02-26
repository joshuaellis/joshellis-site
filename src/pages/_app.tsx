import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

import { globalStyles } from 'styles/global'

const SEO = {
  title: 'Josh Ellis',
  description:
    'creating free open-source libraries for communities. crafting software that brings users joy. special interests in design-systems, components APIs and composable architectures.',
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
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default App
