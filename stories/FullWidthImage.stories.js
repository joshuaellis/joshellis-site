import React from 'react';
import { storiesOf } from '@storybook/react';

import FullWidthImage from 'components/FullWidthImage';

const PROPS = {
  percentage: 0.5,
  speed: -4,
  caption: 'this is a parallax full width image',
  className: 'story__image',
};

storiesOf('Full width image', module).add('default', () => (
  <FullWidthImage {...PROPS}>
    <img src="https://www.billboard.com/files/styles/article_main_image/public/media/drake-2019-bbyx-billboard-1548.jpg" />
  </FullWidthImage>
));
