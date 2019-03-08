import React from 'react';
import { storiesOf } from '@storybook/react';

import ThreeBackground from '../app/components/ThreeBackground';

storiesOf('Three Background', module)
  .add('default', () => <ThreeBackground />)
  .add('mobile', () => <ThreeBackground />);
