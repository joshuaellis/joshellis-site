/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-curly-brace-presence */
/**
 *
 * Header
 *
 */

import React, { memo, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import t from 'lib/strings';
import useClickOutside from 'lib/useClickOutside';
import Menu from 'components/Menu';

import './styles.scss';

function Header({ projectList }) {
  const INFO_HREF = '/info';
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const menuListRef = useRef(null);
  const small = router ? router.pathname !== '/' : true;

  const DURATION = 800;

  // event handlers

  useClickOutside(menuRef, setOpenMenu);

  const handleInfoClick = e => {
    e.preventDefault();
    router.push(INFO_HREF);
  };

  const handleProjectsClick = () => {
    setOpenMenu(!openMenu);
    menuListRef.current.scrollTo({ top: 0 });
  };

  return (
    <header className="head__container">
      <div className={clsx('head', small && 'head--small')}>
        <h1 className="head__title">
          <span>{'Hello, '}</span>
          <span>
            <span>{"I'm "}</span>
            {'Josh Ellis'}
          </span>
        </h1>
        {small && (
          <nav className="head__nav">
            <button
              type="button"
              className={clsx(
                'head__nav__link',
                openMenu && 'head__nav__link--active',
              )}
              onClick={handleProjectsClick}
            >
              {t('nav-projects')}
            </button>
            <a
              href={INFO_HREF}
              onClick={handleInfoClick}
              className={clsx(
                'head__nav__link',
                false && 'head__nav__link--active',
              )}
            >
              {t('nav-about')}
            </a>
          </nav>
        )}
      </div>
      <CSSTransition in={openMenu} timeout={DURATION} classNames="head__menu">
        <div className="head__menu--static" ref={menuRef}>
          <Menu data={projectList} ref={menuListRef} />
        </div>
      </CSSTransition>
    </header>
  );
}

Header.propTypes = {
  projectList: PropTypes.array,
};

export default memo(Header);
