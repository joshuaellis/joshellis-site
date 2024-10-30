import { WidgetPlausible } from 'components/widgets/WidgetPlausible'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from 'styles/stitches.config'

export default class JoshDocument extends Document {
  override render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`/site/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`/site/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`/site/favicon-16x16.png`}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="manifest" href={`/site/site.webmanifest`} />
          <link rel="shortcut icon" href={`/site/favicon.ico`} />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3357c9" />
          <meta name="msapplication-TileColor" content="#3357c9" />
          <meta name="theme-color" content="#3357c9" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <WidgetPlausible />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
