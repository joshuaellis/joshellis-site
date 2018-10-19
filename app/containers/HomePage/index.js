/**
 *
 * HomePage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import injectReducer from 'utils/injectReducer'
import makeSelectHomePage from './selectors'
import reducer from './reducer'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

import Navigation from 'components/LargeNavigation'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Wrapper = styled.div`
  height:calc(100vh - 200px);
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (min-height:1440px){
    height:calc(100vh - 440px);
  }
`

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Wrapper>
          <MediaQuery minDeviceWidth={697} >
            <Navigation portrait={false} />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={696} >
            <Navigation portrait={true} />
          </MediaQuery>
        </Wrapper>
        <Footer />
      </div>
    )
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: 'homePage', reducer })

export default compose(
  withReducer,
  withConnect
)(HomePage)
