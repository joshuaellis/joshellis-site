import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import clsx from 'clsx'

import PlayIcon from 'icons/play.svg'
import InfoIcon from 'icons/info.svg'

import { COLORS, MEDIA_QUERIES } from 'styles'

export default function LargeNav ({ handleInfoClick, showInfo }) {
  return (
    <StyledNav>
      <LargeNavAnchor href='/play'>
        <PlayIcon width={32} height={32} />
      </LargeNavAnchor>
      <LargeNavButton
        type='button'
        onClick={handleInfoClick}
        className={clsx(showInfo && 'icon--active')}
      >
        <InfoIcon width={32} height={32} />
      </LargeNavButton>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;

  @include media('>=tablet') {
    top: 24px;
    right: 40px;
  }

  @include media('>=desktop') {
    top: 32px;
    right: 80px;
  }

  > a,
  button {
  }

  > .icon--active {
    border-color: $c-blue;
  }
`

const LargeNavButton = styled.button`
  padding: 0;
  border: 0;
  border-radius: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
  color: inherit;
  text-align: inherit;
  appearance: none;

  display: block;
  width: 32px;
  height: 32px;
  border: solid 2px ${COLORS.white};
  border-radius: 50%;

  &:focus {
    outline: none;
  }

  > svg {
    margin-top: -2px;
    margin-left: -2px;
    fill: ${COLORS.white};
  }
`

const LargeNavAnchor = styled.a`
  display: block;
  width: 32px;
  height: 32px;
  border: solid 2px ${COLORS.white};
  border-radius: 50%;
  margin-right: 24px;
  display: none;

  &:focus {
    outline: none;
  }

  > svg {
    margin-top: -2px;
    margin-left: -2px;
    fill: ${COLORS.white};
  }

  ${MEDIA_QUERIES.tabletUp} {
    display: block;
  }
`

LargeNav.propTypes = {
  handleInfoClick: PropTypes.func,
  showInfo: PropTypes.bool
}
