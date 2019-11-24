import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from 'components/Card';

const DESIGN_SKILLS_IMAGE = {
  asset: {
    _ref: 'image-af3c1905335fb0f6c7bb378f0a7183cb3ee91c35-1632x1305-png',
    _type: 'reference',
  },
};

const BLACK_MIRROR_IMAGE = {
  asset: {
    _ref: 'image-814ee99cb9208714e236da0c1a76cf5be3d0b5e9-1632x1305-png',
    _type: 'reference',
  },
};

storiesOf('Card', module)
  .add('home // default', () => (
    <Card
      className="story__card"
      client="Design Council"
      color="#fb7e7c"
      image={DESIGN_SKILLS_IMAGE}
      slug="#"
      title="Design Skills"
    />
  ))
  .add('next / prev', () => <Card variant="next" />)
  .add('image cover', () => (
    <Card
      className="story__card"
      color="#e9e9e9"
      slug="#"
      image={BLACK_MIRROR_IMAGE}
      title="Inside Black Mirror"
      fullWidth
      variant="next"
    />
  ));
