import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

import Dropdown from '../app/components/Dropdown';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <Dropdown />);
