import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
import { PROJECTS } from '../app/constants';

import Menu from '../app/components/Menu';

const stories = storiesOf('Menu', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <Menu projects={PROJECTS} />);
