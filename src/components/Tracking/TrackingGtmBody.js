import { PureComponent } from 'react'
import { GTM_CONTAINER_ID } from 'env'

export default class TrackingGtmBody extends PureComponent {
  render() {
    if (!GTM_CONTAINER_ID) return null

    return (
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    )
  }
}
