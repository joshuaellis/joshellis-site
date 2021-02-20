/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/react-axe
 *
 * Example taken from react-axe issue #125
 * @see https://github.com/dequelabs/react-axe/issues/125#issuecomment-562715883
 */

import React from 'react'

import { ALLY_ENABLED } from 'env'

export default function addReactAxe(duration = 1000) {
  const getIsServerRendered = () => {
    return typeof window === 'undefined'
  }

  if (
    process.env.NODE_ENV !== 'production' &&
    ALLY_ENABLED &&
    !getIsServerRendered()
  ) {
    const ReactDOM = require('react-dom')
    const axe = require('react-axe')
    axe(React, ReactDOM, duration)
  }
}
