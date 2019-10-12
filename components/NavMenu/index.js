/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * NavMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';

import './styles.scss';

function NavMenu({ data }) {
  return (
    <ul className="nav-menu">
      {data.map((datum, index) => (
        <li className={clsx('nav-menu__year')} index={index} key={datum}>
          {datum.year}
          <ul className="nav-menu__year__list">
            {datum.projects.map(proj => (
              <li className="nav-menu__year__item">
                <Link href={proj.slug}>
                  <a className="nav-menu__year__link">{proj.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

NavMenu.propTypes = {
  data: PropTypes.array,
};

export default NavMenu;
