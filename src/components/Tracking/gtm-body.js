import React from 'react'

export default () => {
  const TRACKING_ID = process.env.GTM_TRACKING_ID

  if (!TRACKING_ID) {
    return null
  }
  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${TRACKING_ID}`}
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}
