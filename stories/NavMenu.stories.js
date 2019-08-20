import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withKnobs } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import { PROJECTS } from '../app/constants';

import NavMenu from '../app/components/NavMenu';

const stories = storiesOf('NavMenu', module);

stories.addDecorator(StoryRouter());

stories.add('default', () => <NavMenu projects={PROJECTS} />);
