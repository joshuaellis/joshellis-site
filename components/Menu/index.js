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

const Menu = React.forwardRef(
  ({ className, data, onClick, ...restProps }, ref) => {
    const handleClick = () => onClick && onClick();
    const handleKeyDown = e => e.keyCode === 17 && onClick && onClick();

    return (
      <div className={clsx('menu', className)} {...restProps}>
        <ul className="menu__list" ref={ref}>
          {data.map((datum, index) => (
            <li
              className={clsx(
                'menu__year',
                `menu__year--${COLOR_ARRAY[index]}`,
              )}
              index={index}
              key={datum.year}
            >
              {datum.year}
              <ul className="menu__year__list">
                {datum.projects.map(proj => (
                  <li className="menu__year__item" key={proj.slug}>
                    <Link href="/work/[project]" as={`/work/${proj.slug}`}>
                      <a
                        tabIndex="0"
                        role="link"
                        onClick={handleClick}
                        onKeyDown={handleKeyDown}
                        className="menu__year__link"
                      >
                        {proj.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  },
);

Menu.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  onClick: PropTypes.func,
};

export default memo(Menu);
