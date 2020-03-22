import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import clsx from 'clsx'

import t from 'lib/strings'

import {
  COLORS,
  EASING,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES
} from 'styles'

export default function SmallNav ({ handleInfoClick, openMenu, showInfo }) {
  return (
    <nav>
      <SmallNavAnchor
        className={clsx(openMenu && 'head__nav__link--active')}
        href='/'
      >
        {t('nav-projects')}
      </SmallNavAnchor>
      {
        // <SmallNavAnchor
        //   className={clsx(openMenu && 'head__nav__link--active')}
        //   href='/play'
        // >
        //   {t('nav-play')}
        // </SmallNavAnchor>
      }
      <SmallNavButton
        type='button'
        onClick={handleInfoClick}
        className={clsx(showInfo && 'head__nav__link--active')}
      >
        {t('nav-about')}
      </SmallNavButton>
    </nav>
  )
}

const SmallNavAnchor = styled.a`
  text-decoration: none;
  position: relative;
  color: ${COLORS.white};
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.nav};
  line-height: ${LINE_HEIGHTS.default};
  font-weight: 500;

  &::after {
    content: '';
    width: 0;
    height: 4px;
    display: block;
    position: absolute;
    bottom: -4px;
    left: 0;
    background-color: ${COLORS.blue};
    transition: width 150ms ${EASING.easeOutQuad};
  }

  & + & {
    margin-left: 24px;
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }

  &.head__nav__link--active::after {
    width: 100%;
  }

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.defaultLarge};
  }
`

const SmallNavButton = styled.button`
  padding: 0;
  border: 0;
  border-radius: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
  color: inherit;
  text-align: inherit;
  appearance: none;
  text-decoration: none;
  position: relative;
  color: ${COLORS.white};
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.default};
  line-height: ${LINE_HEIGHTS.default};
  font-weight: 500;

  &::after {
    content: '';
    width: 0;
    height: 4px;
    display: block;
    position: absolute;
    bottom: -4px;
    left: 0;
    background-color: ${COLORS.blue};
    transition: width 150ms ${EASING.easeOutQuad};
  }

  ${SmallNavAnchor} + & {
    margin-left: 24px;
  }

  & + & {
    margin-left: 24px;
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }

  &.head__nav__link--active::after {
    width: 100%;
  }

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.defaultLarge};
  }
`

SmallNav.propTypes = {
  handleInfoClick: PropTypes.func,
  openMenu: PropTypes.bool,
  showInfo: PropTypes.bool
}
