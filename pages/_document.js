import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { PATH_STATIC } from 'env'

import { COLORS } from 'references/styles'
import { TrackingGtmHead, TrackingGtmBody } from 'components/Tracking'

export default class JoshDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${PATH_STATIC}/site/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${PATH_STATIC}/site/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${PATH_STATIC}/site/favicon-16x16.png`}
          />
          <link rel="manifest" href={`${PATH_STATIC}/site/site.webmanifest`} />
          <link rel="mask-icon" color={COLORS.blue} />
          <link rel="shortcut icon" href={`${PATH_STATIC}/site/favicon.ico`} />
          <meta name="msapplication-TileColor" content={COLORS.blue} />
          <meta name="theme-color" content={COLORS.blue} />
          <TrackingGtmHead />
        </Head>
        <body>
          <TrackingGtmBody />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
