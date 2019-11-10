import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';

import 'sanitize.css/sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import './stories.css';
import '../styles/styles';

addParameters({
  options: {
    theme: themes.normal,
  },
});

addDecorator(storyFn => storyFn());

addDecorator(withA11y);

const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
