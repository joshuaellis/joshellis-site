import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Modal from '../app/components/Modal';

const message = 'this is a test message';

const stories = storiesOf('Modal', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Modal
    title="Modal Title"
    message={message}
    closeWindow={action('window closed')}
  />
));
