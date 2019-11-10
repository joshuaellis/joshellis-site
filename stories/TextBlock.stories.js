import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from 'components/Text';

storiesOf('Text Block', module).add('default', () => (
  <Text text="The four filters are ‘Colour Separation’ – distorting the RGB layers of the image. ‘Vector Explosion’ – using tiny nodes icons were reproduced as reactive dots that would scatter as the user’s mouse entered. ‘Pixel Sorting’ – sections of the image are captured and each pixel is then sorted by brightness to create a waterfall effect. ‘Emoji Mosaic’ – by scanning each pixel for it’s average colour it is then replaced by a corresponding emoji.">
    <h2>Book</h2>
  </Text>
));
