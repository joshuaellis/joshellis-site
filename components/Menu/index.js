/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Menu
 *
 */

import React, { memo } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { COLOR_ARRAY } from 'lib/constants';

import './styles.scss';

const Menu = React.forwardRef(({ className, data, ...restProps }, ref) => (
  <div className={clsx('menu', className)} {...restProps}>
    <ul className="menu__list" ref={ref}>
      {data.map((datum, index) => (
        <li
          className={clsx('menu__year', `menu__year--${COLOR_ARRAY[index]}`)}
          index={index}
          key={datum}
        >
          {datum.year}
          <ul className="menu__year__list">
            {datum.projects.map(proj => (
              <li className="menu__year__item">
                <Link href={proj.slug}>
                  <a className="menu__year__link">{proj.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
));

Menu.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
};

export default memo(Menu);
