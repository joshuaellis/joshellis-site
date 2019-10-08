/**
 *
 * Menu
 *
 */

import React, { memo } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function Menu({ data, onClick, projects }) {
  return (
    <ul className="menu">
      {data.map((datum, index) => (
        <li className="menu__year" index={index} key={datum}>
          {datum}
          <ul>
            {projects[datum].map(name => (
              <li>
                <Link
                  className="menu__link"
                  to={`/${name
                    .split('<label>WIP</label>')[0]
                    .replace(/\s/g, '-')}`}
                  onClick={onClick}
                />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

Menu.propTypes = {
  data: PropTypes.array,
  projects: PropTypes.object,
  onClick: PropTypes.func,
};

export default memo(Menu);
