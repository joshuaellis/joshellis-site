import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import PhotoGallery from '../app/components/PhotoGallery';

import IMG_WALDO from '../app/assets/images/work-images/black-mirror/waldo-2.jpg';
import IMG_USS_CALLISTER from '../app/assets/images/work-images/black-mirror/USS-callister.jpg';
import IMG_BE_RIGHT_BACK from '../app/assets/images/work-images/black-mirror/Brb-layers-1.jpg';

const stories = storiesOf('PhotoGallery', module);

const image = [
  {
    src: IMG_WALDO,
    alt: 'image_01',
    id: 'image_01',
    caption: 'this is an image caption',
  },
  {
    src: IMG_USS_CALLISTER,
    alt: 'image_02',
    id: 'image_02',
    caption: 'this is a second image caption',
  },
  {
    src: IMG_BE_RIGHT_BACK,
    alt: 'image_03',
    id: 'image_03',
    caption:
      'this is a third image caption that is really long to test on mobile',
  },
];

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <PhotoGallery closeGallery={action('closed window')} imgArr={image} />
));
