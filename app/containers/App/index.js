/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import MediaQuery from 'react-responsive'

import HomePage from 'containers/HomePage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import Work from 'containers/Work'
import About from 'containers/About'
import ThreeBackground from 'components/ThreeBackground'

//Google Analytics
import ReactGA from 'react-ga';

export class App extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    document.getElementById('loadingGIF').style.display = 'none';
    ReactGA.initialize('UA-126238995-2');
    ReactGA.pageview('/homepage');
  }
  render () {
    return (
      <div style={{ maxWidth: '1440px', margin: 'auto', overflowY: 'hidden', overflowX: 'hidden' }}>
        <ThreeBackground />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route component={NotFoundPage} />
        </Switch>
        <MediaQuery maxDeviceHeight={1136} maxDeviceWidth={640} orientation={'landscape'}>
          <div id="overlay" style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '100', backgroundColor: '#000000', position: 'absolute', left: 0, top: 0 }}>
            <svg style={{ width: '64px', height: '64px', position: 'relative', bottom: '16px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path style={{ fill: '#fff' }} d="M8.46,2.81,21.19,15.54l-5.65,5.65L2.81,8.46,8.46,2.81m0-1.42L1.39,8.46,15.54,22.61l7.07-7.07L8.46,1.39Z"/>
              <path style={{ fill: '#fff' }} d="M14.3,1.62l.91-.91L14.5,0,12.38,2.12,14.5,4.24l.71-.7-.92-.92A9.51,9.51,0,0,1,23,12.08h1A10.51,10.51,0,0,0,14.3,1.62Z"/>
              <path style={{ fill: '#fff' }} d="M9.7,22.38l-.91.91L9.5,24l2.12-2.12L9.5,19.76l-.71.7.92.92A9.51,9.51,0,0,1,1,11.92H0A10.51,10.51,0,0,0,9.7,22.38Z"/>
              <rect style={{ fill: 'none' }} width="24" height="24"/>
            </svg>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}
const withConnect = connect(
  mapDispatchToProps
)
export default compose(
  withConnect
)(App)
