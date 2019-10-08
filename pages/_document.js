/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Main, NextScript } from 'next/document';

import t from '../lib/strings';
import { GA_TRACKING_ID } from '../lib/g-analytics';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta name="description" content={t('meta-description')} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={t('meta-url')} />
          <meta property="og:title" content={t('meta-title')} />
          <meta property="og:image" content="" />
          <meta property="og:description" content={t('meta-share')} />
          <meta property="og:site_name" content={t('site-title')} />
          <meta property="og:locale" content="en_UK" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${GA_TRACKING_ID});
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </html>
    );
  }
}
