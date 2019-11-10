import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from 'components/Modal';

storiesOf('Modal', module).add('default', () => (
  <Modal>
    <img src="https://www.billboard.com/files/styles/article_main_image/public/media/drake-2019-bbyx-billboard-1548.jpg" />
  </Modal>
));
