import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

import SiteHeader from '../app/components/SiteHeader';

const stories = storiesOf('SiteHeader', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <SiteHeader />);
