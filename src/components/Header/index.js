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
import Portal from 'components/Portal';
import InfoModal from 'components/InfoModal';

import PlayIcon from 'icons/play.svg';
import InfoIcon from 'icons/info.svg';

import './styles.scss';

function Header({ infoContent }) {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const menuRef = useRef(null);
  const small = router ? router.pathname !== '/' : true;
  const play = router ? router.pathname === '/play' : false;

  const INFO_DURATION = 800;

  // event handlers

  useClickOutside(menuRef, setOpenMenu);

  const handleInfoClick = () => {
    if (openMenu) {
      setOpenMenu(false);
    }
    setShowInfo(!showInfo);
  };

  return (
    <header className={clsx('head__container', play && 'head--play')}>
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
        {!small && (
          <nav className="head__nav__icons">
            <a href="/play">
              <PlayIcon width={32} height={32} />
            </a>
            <button
              type="button"
              onClick={handleInfoClick}
              className={clsx(showInfo && 'icon--active')}
            >
              <InfoIcon width={32} height={32} />
            </button>
          </nav>
        )}
        {small && (
          <nav className="head__nav">
            <a
              className={clsx(
                'head__nav__link',
                openMenu && 'head__nav__link--active',
              )}
              href="/"
            >
              {t('nav-projects')}
            </a>
            <a
              className={clsx(
                'head__nav__link',
                openMenu && 'head__nav__link--active',
              )}
              href="/play"
            >
              {t('nav-play')}
            </a>
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
      <Portal elementId="#modal">
        {infoContent ? (
          <CSSTransition
            in={showInfo}
            timeout={INFO_DURATION}
            classNames="header__info"
            appear
            unmountOnExit
          >
            <InfoModal
              className={clsx('header__info', !small && 'home__info__overlay')}
              content={infoContent}
            />
          </CSSTransition>
        ) : null}
      </Portal>
    </header>
  );
}

Header.propTypes = {
  infoContent: PropTypes.object,
};

export default memo(Header);
