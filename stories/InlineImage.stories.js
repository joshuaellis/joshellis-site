import React from 'react';
import { storiesOf } from '@storybook/react';

import InlineImage from 'components/InlineImage';

const PROPS = {
  caption: 'this is an inline image with a background',
  className: 'story__image',
  color: 'rgba(95,209,109, 0.16)',
};

storiesOf('Inline image', module).add('default', () => (
  <InlineImage {...PROPS}>
    <img src="https://www.billboard.com/files/styles/article_main_image/public/media/drake-2019-bbyx-billboard-1548.jpg" />
  </InlineImage>
));
