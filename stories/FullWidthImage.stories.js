import React from 'react'
import { storiesOf } from '@storybook/react'

import FullWidthImage from 'components/FullWidthImage'

const PROPS = {
  caption: 'this is a parallax full width image',
  className: 'story__image'
}

storiesOf('Full width image', module).add('default', () => (
  <FullWidthImage {...PROPS}>
    <img src='https://www.billboard.com/files/styles/article_main_image/public/media/drake-2019-bbyx-billboard-1548.jpg' />
  </FullWidthImage>
))
