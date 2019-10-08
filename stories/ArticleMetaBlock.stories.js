import React from 'react';
import { storiesOf } from '@storybook/react';

import ArticleMetaBlock from 'components/ArticleMetaBlock';

storiesOf('Article Meta Block', module).add('default', () => (
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
