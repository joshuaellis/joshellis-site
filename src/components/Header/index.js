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
import Portal from 'components/Portal';
import InfoModal from 'components/InfoModal';

import './styles.scss';

function Header({ infoContent, projectList }) {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const menuRef = useRef(null);
  const menuListRef = useRef(null);
  const small = router ? router.pathname !== '/' : true;

  const MENU_DURATION = 800;
  const INFO_DURATION = 800;

  // event handlers

  useClickOutside(menuRef, setOpenMenu);

  const handleInfoClick = () => {
    if (openMenu) {
      setOpenMenu(false);
    }
    setShowInfo(!showInfo);
  };

  const handleProjectsClick = () => {
    if (showInfo) {
      setShowInfo(false);
    }
    setOpenMenu(!openMenu);
    menuListRef.current.scrollTo({ top: 0 });
  };

  const handleMenuClick = () => setOpenMenu(false);

  return (
    <header className="head__container">
      <div className={clsx('head', small && 'head--small')}>
        <h1 className="head__title">
          <a href="/">
            <span>{'Hello, '}</span>
            <span>
              <span>{"I'm "}</span>
              {'Josh Ellis'}
            </span>
          </a>
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
            <button
              type="button"
              onClick={handleInfoClick}
              className={clsx(
                'head__nav__link',
                showInfo && 'head__nav__link--active',
              )}
            >
              {t('nav-about')}
            </button>
          </nav>
        )}
      </div>
      <CSSTransition
        in={openMenu}
        timeout={MENU_DURATION}
        classNames="head__menu"
      >
        <div className="head__menu--static" ref={menuRef}>
          <Menu
            data={projectList}
            ref={menuListRef}
            onClick={handleMenuClick}
          />
        </div>
      </CSSTransition>
      <Portal elementId="#modal">
        {infoContent ? (
          <CSSTransition
            in={showInfo}
            timeout={INFO_DURATION}
            classNames="header__info"
            appear
            unmountOnExit
          >
            <InfoModal className="header__info" content={infoContent} />
          </CSSTransition>
        ) : null}
      </Portal>
    </header>
  );
}

Header.propTypes = {
  projectList: PropTypes.array,
  infoContent: PropTypes.object,
};

export default memo(Header);
