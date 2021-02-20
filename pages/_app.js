import React, { useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { DefaultSeo } from 'next-seo'
import { IntlProvider } from 'react-intl'

import addReactAxe from 'helpers/addReactAxe'
import getLanguage from 'helpers/getLanguage'

import { CSS_GLOBAL, CSS_FONTS } from 'references/styles'
import SEO from 'references/seo'

import { fetchStrings } from './../tools/fetchStrings'

const GlobalStyle = createGlobalStyle`
  ${CSS_FONTS}
  ${CSS_GLOBAL}
`

// non-production running accessibility helper
addReactAxe()

const App = ({ language, Component, pageProps, messages }) => {
  useEffect(() => {
    const body = document.body
    document.addEventListener(
      'mousedown',
      () => {
        body.classList.remove('js-focus-visible')
      },
      false
    )
    document.addEventListener(
      'keydown',
      (e) => {
        if (e.keyCode === 9) {
          body.classList.add('js-focus-visible')
        }
      },
      false
    )
  }, [])

  return (
    <IntlProvider messages={messages[language]} locale={language}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <GlobalStyle />
    </IntlProvider>
  )
}

export default App

App.getInitialProps = async (ctx) => {
  const messages = await fetchStrings()
  return {
    messages,
    language: getLanguage(ctx),
  }
}
