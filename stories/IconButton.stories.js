import React from 'react'
import { storiesOf } from '@storybook/react'

import IconButton from 'components/IconButton'
import Close from 'icons/close.svg'

storiesOf('Icon Button', module).add('default', () => (
  <IconButton>
    <Close width={16} height={16} fill='#000' />
  </IconButton>
))
