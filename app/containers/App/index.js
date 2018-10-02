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
import { connect } from 'react-redux';
import { compose } from 'redux';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Work from 'containers/Work';
import About from 'containers/About';
import Header from 'components/Header';
import Footer from 'components/Footer';

export class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    document.getElementById('loadingGIF').style.display = 'none';
  }
  render(){
    return (
      <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/about" component={About} />
            <Route component={NotFoundPage} />
          </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withConnect = connect(
  mapDispatchToProps,
);
export default compose(
  withConnect,
)(App);