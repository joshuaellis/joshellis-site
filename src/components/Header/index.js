/**
 *
 * Header
 *
 */

import React, { memo, useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styled from 'styled-components'

import useClickOutside from 'lib/useClickOutside'
import Portal from 'components/Portal'
import InfoModal from 'components/InfoModal'

import {
  COLORS,
  EASING,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES,
  MISC
} from 'styles'

import LargeNav from './LargeNav'
import SmallNav from './SmallNav'

function Header ({ infoContent }) {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const menuRef = useRef(null)
  const small = router ? router.pathname !== '/' : true
  const play = router ? router.pathname === '/play' : false

  const INFO_DURATION = 800

  // event handlers

  useClickOutside(menuRef, setOpenMenu)

  const handleInfoClick = () => {
    if (openMenu) {
      setOpenMenu(false)
    }
    setShowInfo(!showInfo)
  }

  return (
    <StyledHeader className={clsx(play && 'head--play')}>
      <Head className={clsx(small && 'head--small')}>
        <HeadTitle>
          <a href='/'>
            <span>Hello, </span>
            <span>
              <span>I'm </span>
              {'Josh Ellis'}
            </span>
          </a>
        </HeadTitle>
        {!small && (
          <LargeNav handleInfoClick={handleInfoClick} showInfo={showInfo} />
        )}
        {small && (
          <SmallNav
            handleInfoClick={handleInfoClick}
            openMenu={openMenu}
            showInfo={showInfo}
          />
        )}
      </Head>
      <Portal elementId='#modal'>
        {infoContent ? (
          <CSSTransition
            in={showInfo}
            timeout={INFO_DURATION}
            classNames='header__info'
            appear
            unmountOnExit
          >
            <HomeInfoModal
              className={clsx(!small && 'home__info__overlay')}
              content={infoContent}
            />
          </CSSTransition>
        ) : null}
      </Portal>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${COLORS.black};
  top: 0px;
  z-index: 40;

  &.head--play {
    background-color: transparent;

    > div {
      background-color: transparent;
    }
  }
`

const HeadTitle = styled.h1`
  font-family: ${FONT_FAMILIES.surt};
  font-weight: 500;
  font-size: ${FONT_SIZES.massiveSmall};
  line-height: ${LINE_HEIGHTS.massiveSmall};
  color: ${COLORS.white};
  display: inline-block;

  a > span {
    display: block;
  }

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.massive};
    line-height: ${LINE_HEIGHTS.massive};
  }

  ${MEDIA_QUERIES.desktopUp} {
    font-size: ${FONT_SIZES.massiveLarge};
    line-height: ${LINE_HEIGHTS.massiveLarge};
  }
`

const Head = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: ${COLORS.black};
  padding: 16px;
  height: ${MISC.mobileHeaderHeight}px;

  ${MEDIA_QUERIES.tabletUp} {
    padding: 24px 40px;
    height: ${MISC.tabletHeaderHeight}px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    padding: 32px 80px;
    height: ${MISC.desktopHeaderHeight}px;
    margin: 0 auto;
    max-width: ${MISC.maxWidth + MISC.pageGutter * 15}px;
  }

  &.head--small {
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;

    ${MEDIA_QUERIES.tabletUp} {
      height: 88px;
      padding: 0 ${MISC.tabletPageGutter}px;
    }

    ${MEDIA_QUERIES.desktopUp} {
      padding: 0 ${MISC.desktopPageGutter}px;
    }

    & ${HeadTitle} {
      font-family: ${FONT_FAMILIES.surt};
      font-weight: 500;
      font-size: ${FONT_SIZES.mediumSmall};
      line-height: ${LINE_HEIGHTS.mediumSmall};
      color: ${COLORS.white};

      ${MEDIA_QUERIES.tabletUp} {
        font-size: ${FONT_SIZES.larger};
      }

      span {
        display: inline;

        &:first-child {
          display: none;

          ${MEDIA_QUERIES.tabletUp} {
            display: inline;
          }
        }
      }
    }
  }
`

const HomeInfoModal = styled(InfoModal)`
  left: 100%;
  transition: transform 800ms ${EASING.easeInOutQuint};

  &.home__info__overlay {
    padding-top: 0;
    overflow-y: scroll;
    top: ${MISC.mobileHeaderHeight}px;
    min-height: calc(100vh - ${MISC.mobileHeaderHeight}px);

    ${MEDIA_QUERIES.tabletUp} {
      top: ${MISC.tabletHeaderHeight - 32}px;
      min-height: calc(100vh - ${MISC.tabletHeaderHeight}px);
    }

    ${MEDIA_QUERIES.desktopUp} {
      top: ${MISC.desktopHeaderHeight - 48}px;
      min-height: calc(100vh - ${MISC.desktopHeaderHeight}px);
    }
  }

  &.header__info-appear-active,
  &.header__info-enter-active {
    transform: translateX(-100%);
  }

  &.header__info-enter-done {
    transform: translateX(-100%);
  }

  &.header__info-exit-active {
    transform: translateX(100%);
  }

  &.header__info-exit-done {
    transform: translateX(100%);
  }
`

Header.propTypes = {
  infoContent: PropTypes.object
}

export default memo(Header)
