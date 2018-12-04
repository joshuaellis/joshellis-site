/**
 *
 * WorkMenu
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './WorkMenu.css'

const SVG = styled.svg`
  width:20px;
  position:relative;
  top:35px;
  margin-right:10px;
  margin-top:-4px;
`

/* eslint-disable react/prefer-stateless-function */
class WorkMenu extends React.Component {
  constructor (props) {
    super(props)
    this.handleHoverOn = this.handleHoverOn.bind(this)
    this.handleHoverOff = this.handleHoverOff.bind(this)
  }
  handleHoverOn (e) {
    let x = e.target
    while (x.id != 'parentLi') {
      x = x.parentNode
    }
    x.children[0].children[1].setAttribute('r', '10')
    this.props.dispatch(this.props.updateProjectAction(x.getAttribute('data-tag'), true))
  }
  handleHoverOff (e) {
    let x = e.target
    while (x.id != 'parentLi') {
      x = x.parentNode
    }
    x.children[0].children[1].setAttribute('r', '6')
  }
  render () {
    const projectLength = this.props.projects.length
    return (
      <div style={{ whiteSpace: 'nowrap', marginTop: '-88px', height: '336px', overflowY: 'hidden', paddingRight: '24px', overflowX: 'hidden' }}>
        <ul>
          {this.props.projects.map(function (x, index) {
            return (
              <li data-tag={x} id="parentLi" key={x}>
                {
                  (index + 1) == projectLength
                    ? (<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 82"><rect style={{ fill: 'none' }} width="20" height="82" /><circle cx="10" cy="10" r="6" /></SVG>)
                    : (<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 82"><rect style={{ fill: 'none' }} width="20" height="82" /><circle cx="10" cy="10" r="6" /><rect x="9" y="10" width="2" height="72" /></SVG>)
                }
                <a onClick={this.handleHoverOn} onMouseEnter={this.handleHoverOn} onMouseLeave={this.handleHoverOff}><span>//0{index + 1}</span> {x}</a>
              </li>
            )
          }, this)}
        </ul>
      </div>
    )
  }
}

WorkMenu.propTypes = {
  projects: PropTypes.array.isRequired
}

export default WorkMenu
