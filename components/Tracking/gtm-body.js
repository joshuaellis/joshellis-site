/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment } from 'react';

export default () => {
  const TRACKING_ID = process.env.GTM_TRACKING_ID;

  if (!TRACKING_ID) {
    return null;
  }
  return (
    <Fragment>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${TRACKING_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </Fragment>
  );
};
