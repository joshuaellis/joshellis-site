import React, { Fragment } from 'react';

export default () => {
  const GA_TRACKING_ID = process.env.ANALYTICS_KEY;
  if (!GA_TRACKING_ID) {
    return null;
  }
  return (
    <Fragment>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></script>
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING_ID}');`,
        }}
      />
    </Fragment>
  );
};
