import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { createGlobalStyle } from 'styled-components';

import { CSS_FONTS, CSS_GLOBAL } from 'styles';

import './stories.css';

const GlobalStyle = createGlobalStyle`
  ${CSS_FONTS}
  ${CSS_GLOBAL}
`;

addParameters({
  options: {
    theme: themes.normal,
  },
});

addDecorator(storyFn => (
  <React.Fragment>
    <GlobalStyle />
    {storyFn()}
  </React.Fragment>
));

addDecorator(withA11y);

const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
