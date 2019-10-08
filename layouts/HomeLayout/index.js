import React from 'react';
import PropTypes from 'prop-types';

import Standfirst from 'components/Standfirst';
import NavMenu from 'components/NavMenu';

import './styles.scss';

export function HomeLayout(props) {
  return (
    <main className="home">
      <Standfirst />
      <NavMenu />
    </main>
  );
}

HomeLayout.propTypes = {};

export default HomeLayout;
