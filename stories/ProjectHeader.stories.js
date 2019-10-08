import React from 'react';
import { storiesOf } from '@storybook/react';

import ProjectHeader from 'components/ProjectHeader';

storiesOf('Project Header', module).add('default', () => (
  <ProjectHeader
    projectTitle="Black Mirror"
    onClick={() => console.log('click')}
  />
));
