import React from 'react';
import { storiesOf } from '@storybook/react';

import NavMenu from 'components/NavMenu';

const DATA = [
  {
    year: '2019',
    projects: [
      { title: 'x', slug: 'xx' },
      { title: 'y', slug: 'yy' },
      { title: 'z', slug: 'zz' },
    ],
  },
  {
    year: '2018',
    projects: [
      { title: 'a', slug: 'aa' },
      { title: 'b', slug: 'bb' },
      { title: 'c', slug: 'cc' },
    ],
  },
  {
    year: '2017',
    projects: [
      { title: 'black-mirror', slug: 'bm' },
      { title: 'Cisco digital readiness', slug: 'cisco' },
      { title: 'c', slug: 'cc' },
    ],
  },
];

storiesOf('Nav Menu', module).add('default', () => <NavMenu data={DATA} />);
