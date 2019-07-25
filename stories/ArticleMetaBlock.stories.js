import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

import ArticleMetaBlock from '../app/components/ArticleMetaBlock';

const stories = storiesOf('ArticleMetaBlock', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <ArticleMetaBlock>
    {[
      <span className="article__meta-label">Client</span>,
      'R&D at Applied Works',
      <span className="article__meta-label">Studio</span>,
      'Applied Works',
      <span className="article__meta-label">Role</span>,
      'Designer // Developer',
      <span className="article__meta-label">Tech Stack</span>,
      'React & Redux with Firebase',
    ]}
  </ArticleMetaBlock>
));
