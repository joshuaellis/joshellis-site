/**
 *
 * Portal
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

export class Portal extends React.Component {
  componentDidMount () {
    this.element = document.querySelector(this.props.elementId)
  }

  render () {
    if (this.element === undefined) {
      return null
    }

    return createPortal(this.props.children, this.element)
  }
}

Portal.defaultProps = {
  elementId: 'modal'
}

Portal.propTypes = {
  elementId: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]).isRequired
}

export default Portal
