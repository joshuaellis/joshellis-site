import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from 'components/Dropdown';

storiesOf('Dropdown', module).add('default', () => (
  <Dropdown title="Inside Black Mirror" />
));
