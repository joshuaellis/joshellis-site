import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Cursor from '../app/components/Cursor';

const stories = storiesOf('Cursor', module);

stories.addDecorator(withKnobs);

stories.add('Regular', () => <Cursor hide={false} x={50} y={50} />);
