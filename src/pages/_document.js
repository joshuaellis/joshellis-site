/* eslint-disable react/react-in-jsx-scope */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTMTrackingHead, GTMTrackingBody } from '../components/Tracking';

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <GTMTrackingHead />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <GTMTrackingBody />
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
