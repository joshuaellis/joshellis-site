/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Footer({ project }) {
  return (
    <footer
      className="foot t-foot"
      style={{ paddingLeft: project ? '111px' : ' 56px' }}
    >
      <ul className="foot__list">
        <li className="foot__item">
          <a
            className="foot__anchor foot__anchor--blue"
            rel="noopener"
            target="_blank"
            href="mailto:joshua.ellis18@gmail.com?Subject=Hello%20there"
          >
            Contact me
          </a>
        </li>
        <li className="foot__item">
          <a
            className="foot__anchor foot__anchor--red"
            rel="noopener"
            target="_blank"
            href="https://www.instagram.com/planet_josh"
          >
            Stalk me
          </a>
        </li>
        <li className="foot__item">
          <a
            className="foot__anchor foot__anchor--orange"
            rel="noopener"
            target="_blank"
            href="https://github.com/joshuaellis"
          >
            Judge my code
          </a>
        </li>
      </ul>
    </footer>
  );
}

Footer.propTypes = {
  project: PropTypes.bool,
};

export default memo(Footer);
