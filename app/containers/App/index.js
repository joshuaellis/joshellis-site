/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// import ReactGA from 'react-ga';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ProjectPage from 'containers/ProjectPage/Loadable';

import GlobalStyle from '../../global-styles';

import { PROJECTS } from '../../constants';

export default function App() {
  useEffect(() => {
    document.getElementById('loadingGIF').style.display = 'none';
    // ReactGA.initialize('UA-126238995-2');
    // ReactGA.pageview('/homepage');
  }, []);
  const routes = [];
  Object.keys(PROJECTS)
    .sort()
    .reverse()
    .map(key =>
      PROJECTS[key].map(x =>
        routes.push(x.split('<label>WIP</label>')[0].replace(/\s/g, '-')),
      ),
    );
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path={`/(${routes.join('|')})/`} component={ProjectPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
