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

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';
import Work from 'containers/Work';
import About from 'containers/About';
import ReactGA from 'react-ga';
import GlobalStyle from '../../global-styles';

import ThreeBackground from '../../components/ThreeBackground';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RotateScreen from '../../components/RotateScreen';

export class App extends React.Component {
  componentDidMount() {
    document.getElementById('loadingGIF').style.display = 'none';
    ReactGA.initialize('UA-126238995-2');
    ReactGA.pageview('/homepage');
  }

  render() {
    return (
      <div
        style={{
          maxWidth: '1440px',
          margin: 'auto',
          overflowY: 'hidden',
          overflowX: 'hidden',
        }}
      >
        <ThreeBackground />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route component={NotFoundPage} />
        </Switch>
        <MediaQuery
          maxDeviceHeight={1136}
          maxDeviceWidth={640}
          orientation="landscape"
        >
          <RotateScreen />
        </MediaQuery>
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
