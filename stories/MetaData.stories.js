import React from 'react'
import { storiesOf } from '@storybook/react'

import MetaData from 'components/MetaData'

const DATA = [
  { title: 'Client', copy: <p>apple</p> },
  { title: 'Studio', copy: <p>apple</p> },
  { title: 'Role', copy: <p>apple</p> },
  { title: 'Tech Stack', copy: <p>apple</p> }
]

storiesOf('Meta data', module).add('default', () => (
  <MetaData className='story__meta'>{DATA}</MetaData>
))
