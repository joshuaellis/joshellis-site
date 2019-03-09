import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Window from '../app/components/Window';

const messageObj = {
  'Current position: ': 'Designer at Applied Works',
  'Current location: ': 'London',
  'Notable mentions: ': ['Gradwatch 2017', 'Creative Review'],
  mentions_url: [
    'https://www.creativereview.co.uk/gradwatch-2017-kingstons-graphic-design-degree-show/',
    'https://www.creativereview.co.uk/new-book-delves-into-the-dystopian-world-of-black-mirror/',
  ],
  'Background information: ':
    'A creative technologist investigating how digital experiences can be used to enhance day to day life.  Whether it’s screen based or physical, technology plays a role in the work produced. If you have a project you think I can help with, either designing or development please contact me.',
};

const stories = storiesOf('Window', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const open = boolean('Open Window', true);
  if (open) {
    return (
      <Window
        title="Modal Title"
        closeWindow={action('window closed')}
        message={messageObj}
        modal={false}
      />
    );
  }
  return null;
});
