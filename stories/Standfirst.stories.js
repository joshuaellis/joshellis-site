import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

import Standfirst from '../app/components/Standfirst';

const stories = storiesOf('Standfirst', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <Standfirst />);
