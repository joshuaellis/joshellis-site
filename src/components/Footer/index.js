/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import t from 'lib/strings';

import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES,
  MISC,
} from 'styles';

function Footer() {
  const router = useRouter();
  const play = router ? router.pathname === '/play' : false;
  return (
    <StyledFooter className={clsx(play && 'foot--play')}>
      <FooterList>
        <FooterItem>
          <FooterAnchor
            className="foot__anchor--blue"
            rel="noopener"
            target="_blank"
            href="mailto:joshua.ellis18@gmail.com?Subject=Hello%20there"
          >
            {t('contact-title')}
          </FooterAnchor>
        </FooterItem>
        <FooterItem>
          <FooterAnchor
            className="foot__anchor--red"
            rel="noopener"
            target="_blank"
            href="https://www.instagram.com/planet_josh"
          >
            {t('instagram-title')}
          </FooterAnchor>
        </FooterItem>
        <FooterItem>
          <FooterAnchor
            className="foot__anchor--orange"
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/joshua-ellis-66b362114/"
          >
            {t('linkedin-title')}
          </FooterAnchor>
        </FooterItem>
      </FooterList>
    </StyledFooter>
  );
}

export const StyledFooter = styled.footer`
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.nav};
  line-height: ${LINE_HEIGHTS.mediumSmall};
  font-weight: 500;
  background-color: ${COLORS.footBg};
  padding-bottom: 32px;
  padding-top: 16px;
  width: 100%;
  margin-top: 48px;

  ${MEDIA_QUERIES.tabletUp} {
    padding-top: 24px;
    padding-bottom: 32px;
  }

  &.foot--play {
    background-color: transparent;
    color: ${COLORS.white};
  }
`;

const FooterList = styled.ul`
  padding: 0 16px;

  ${MEDIA_QUERIES.tabletUp} {
    display: flex;
    padding: 0 40px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    padding: 0 80px;
    margin: 0 auto;
    max-width: ${MISC.maxWidth + MISC.pageGutter * 5}px;
  }
`;

const FooterItem = styled.li`
  ${MEDIA_QUERIES.tabletUp} {
    & + & {
      margin-left: 40px;
    }
  }
`;

const FooterAnchor = styled.a`
  text-decoration: none;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    transition: width 300ms ease-out;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    bottom: 2px;

    &:after {
      bottom: -2px;
    }
  }

  &.foot__anchor--orange {
    &:after {
      background-color: ${COLORS.orange};
    }
  }

  &.foot__anchor--blue {
    &:after {
      background-color: ${COLORS.blue};
    }
  }

  &.foot__anchor--red {
    &:after {
      background-color: ${COLORS.red};
    }
  }

  &.foot__anchor--green {
    &:after {
      background-color: ${COLORS.green};
    }
  }
`;

export default memo(Footer);
