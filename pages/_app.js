import React, { useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { DefaultSeo } from 'next-seo'
import { IntlProvider } from 'react-intl'

import { CSS_GLOBAL, CSS_FONTS } from 'references/styles'
import SEO from 'references/seo'

import EN from 'references/locales/en'

const GlobalStyle = createGlobalStyle`
  ${CSS_FONTS}
  ${CSS_GLOBAL}
`

const App = ({ Component, pageProps }) => {
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
    <IntlProvider messages={EN} locale={'en'}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <GlobalStyle />
    </IntlProvider>
  )
}

export default App
