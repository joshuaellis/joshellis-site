import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withConsole } from '@storybook/addon-console';
import 'sanitize.css/sanitize.css';

import React from 'react';
import GlobalStyle from '../app/global-styles';

//Inject storybook theme
const theme = themes.dark
addParameters({ options: { theme } });

//Console logging injection
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

//Global Styles injection for components
function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {storyFn()}
    </React.Fragment>
  )
}
addDecorator(withGlobalStyles);

//Get all the stories and load them
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);