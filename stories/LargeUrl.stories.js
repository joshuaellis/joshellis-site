import React from 'react';
import { storiesOf } from '@storybook/react';

import LargeUrl from 'components/LargeUrl';

storiesOf('Large Url', module).add('default', () => (
  <LargeUrl className="story__url" href="www.example.com">
    blackmirror.com
  </LargeUrl>
));
