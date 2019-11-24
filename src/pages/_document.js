/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Main, NextScript } from 'next/document';
import {
  GAnalytics,
  GTMTrackingHead,
  GTMTrackingBody,
} from '../components/Tracking';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <GAnalytics />
          <GTMTrackingHead />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
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
