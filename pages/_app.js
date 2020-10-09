import React from 'react'
import { createGlobalStyle } from 'styled-components'
import App from 'next/app'
import { DefaultSeo } from 'next-seo'

import addReactAxe from 'helpers/addReactAxe'

import { CSS_GLOBAL, CSS_FONTS } from 'references/styles'
import SEO from 'references/seo'

const GlobalStyle = createGlobalStyle`
  ${CSS_FONTS}
  ${CSS_GLOBAL}
`

// non-production running accessibility helper
addReactAxe()

export default class CustomApp extends App {
  componentDidMount () {
    this.detectMouseOrTabbing()
  }

  detectMouseOrTabbing = () => {
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
      e => {
        if (e.keyCode === 9) {
          body.classList.add('js-focus-visible')
        }
      },
      false
    )
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    )
  }
}
