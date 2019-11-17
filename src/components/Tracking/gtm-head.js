import React, { Fragment } from 'react';

export default () => {
  const TRACKING_ID = process.env.GTM_TRACKING_ID;

  if (!TRACKING_ID) {
    return null;
  }
  return (
    <Fragment>
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${TRACKING_ID}');
      `,
        }}
      />
    </Fragment>
  );
};
