/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Main, NextScript } from 'next/document';
import {
  GAnalytics,
  GTMTrackingHead,
  GTMTrackingBody,
} from '../components/Tracking';

import t from '../lib/strings';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <GAnalytics />
          <GTMTrackingHead />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta name="description" content={t('meta-description')} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={t('meta-title')} />
          <meta property="og:description" content={t('meta-share')} />
          <meta property="og:image" content="" />
          <meta property="og:url" content={t('meta-url')} />
          <meta property="og:site_name" content={t('site-title')} />

          <meta name="twitter:title" content={t('meta-title')} />
          <meta name="twitter:description" content={t('meta-share')} />
          <meta name="twitter:image" content="" />
        </Head>
        <body>
          <GTMTrackingBody />
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </html>
    );
  }
}
