import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Modal from '../app/components/Modal';

import { CHANGE_LOG_TEXT } from '../app/content/global.content';

const stories = storiesOf('Modal', module);

stories.addDecorator(withKnobs);

stories.add('Using string', () => (
  <Modal
    title="Changelog"
    message={CHANGE_LOG_TEXT}
    closeWindow={action('window closed')}
  />
));
