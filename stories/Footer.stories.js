import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

import Footer from '../app/components/Footer';

const stories = storiesOf('Footer', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <Footer />);
