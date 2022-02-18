import { PureComponent } from 'react'
import Script from 'next/script'
import { GTM_CONTAINER_ID } from 'env'

export default class TrackingGtmHead extends PureComponent {
  render() {
    if (!GTM_CONTAINER_ID) return null

    return (
      <Script
        strategy="afterInteractive"
        id="gtm__head"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`,
        }}
      />
    )
  }
}
