import React from 'react';
import { storiesOf } from '@storybook/react';

import Standfirst from 'components/Standfirst';

storiesOf('Standfirst', module).add('default', () => (
  <Standfirst>
    <React.Fragment>
      <h2>Apple</h2>
      <h2>Banana</h2>
      <h2>Orange</h2>
      <h2>Cucumber</h2>
    </React.Fragment>
  </Standfirst>
));
