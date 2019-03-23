import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Window from '../app/components/Window';
import { messages } from '../app/content/about.content';

const stories = storiesOf('Window', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const open = boolean('Open Window', true);
  if (open) {
    return (
      <Window
        title="Modal Title"
        closeWindow={action('window closed')}
        message={messages.windowCopy}
        modal={false}
      />
    );
  }
  return null;
});
