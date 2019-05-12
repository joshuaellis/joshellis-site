import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ProjectHeader from '../app/components/ProjectHeader';

const stories = storiesOf('ProjectHeader', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <ProjectHeader projectTitle="Black Mirror" onClick={action('clicked')} />
));
