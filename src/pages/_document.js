/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Main, NextScript } from 'next/document';
import { GTMTrackingHead, GTMTrackingBody } from '../components/Tracking';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <GTMTrackingHead />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
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
