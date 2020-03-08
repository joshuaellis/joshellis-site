import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  COLORS,
  EASING,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES,
} from 'styles';

export default function MetaItem({ children, title }) {
  return (
    <MetaItemContainer>
      <MetaItemTitle>{title}</MetaItemTitle>
      <MetaItemOrnament />
      {children}
    </MetaItemContainer>
  );
}

const MetaItemContainer = styled.div`
  > a {
    position: relative;
    z-index: 0;

    &::after {
      content: '';
      width: 100%;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${COLORS.blue};
      height: 2px;
      z-index: -10;
      transition: width 500ms ${EASING.easeOutQuad};
    }

    &:hover::after {
      width: 0;
    }

    &:focus {
      outline: none;
      bottom: -4px;

      &::after {
        bottom: -6px;
        background-color: ${COLORS.orange};
      }
    }
  }

  &:nth-child(1) {
    grid-area: client;
  }

  &:nth-child(2) {
    grid-area: studio;
  }

  &:nth-child(3) {
    grid-area: role;
  }

  &:nth-child(4) {
    grid-area: tech;
  }
`;

const MetaItemTitle = styled.span`
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.defaultSmall};
  line-height: ${LINE_HEIGHTS.default};
  font-weight: 400;
  color: ${COLORS.black};

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.default};
  }
`;

const MetaItemOrnament = styled.span`
  margin: 8px 0 16px 0;
  display: block;
  background-color: ${COLORS.black};
  height: 4px;
  width: 24px;
`;

MetaItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  title: PropTypes.string,
};
