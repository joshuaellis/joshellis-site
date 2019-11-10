/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';

import t from 'lib/strings';

import './styles.scss';

function Footer() {
  return (
    <footer className="foot t-foot">
      <ul className="foot__list">
        <li className="foot__item">
          <a
            className="foot__anchor foot__anchor--blue"
            rel="noopener"
            target="_blank"
            href="mailto:joshua.ellis18@gmail.com?Subject=Hello%20there"
          >
            {t('contact-title')}
          </a>
        </li>
        <li className="foot__item">
          <a
            className="foot__anchor foot__anchor--red"
            rel="noopener"
            target="_blank"
            href="https://www.instagram.com/planet_josh"
          >
            {t('instagram-title')}
          </a>
        </li>
        <li className="foot__item">
          <a
            className="foot__anchor foot__anchor--orange"
            rel="noopener"
            target="_blank"
            href="https://github.com/joshuaellis"
          >
            {t('github-title')}
          </a>
        </li>
        <li className="foot__item">
          <a
            className="foot__anchor foot__anchor--green"
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/joshua-ellis-66b362114/"
          >
            {t('linkedin-title')}
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default memo(Footer);
