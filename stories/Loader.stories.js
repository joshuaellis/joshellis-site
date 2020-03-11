import React from 'react'
import { storiesOf } from '@storybook/react'

import Loader from 'components/Loader'

storiesOf('Loader', module).add('default', () => (
  <Loader className='story__loader' size='32px' />
))
