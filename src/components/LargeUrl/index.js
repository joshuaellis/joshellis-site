import React, { memo } from 'react';
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

function LargeUrl({ children, className }) {
  const [title, href] = children;
  return (
    <StyledUrl className={className} rel="noopener" target="_blank" href={href}>
      {title}
    </StyledUrl>
  );
}

const StyledUrl = styled.a`
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.defaultLarge};
  line-height: ${LINE_HEIGHTS.defaultLarge};
  font-weight: 400;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: ${COLORS.blue};
    bottom: -2px;
    left: 0;
    transition: width 500ms ${EASING.easeOutQuad};
  }

  &:hover::after {
    width: 0;
  }

  &:focus {
    outline: none;
    bottom: 4px;

    &::after {
      bottom: -6px;
      background-color: ${COLORS.orange};
    }
  }

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.medium};
    line-height: ${LINE_HEIGHTS.medium};
  }

  ${MEDIA_QUERIES.desktopUp} {
    font-size: ${FONT_SIZES.mediumLarge};
    line-height: ${LINE_HEIGHTS.mediumLarge};
  }
`;

LargeUrl.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
};

export default memo(LargeUrl);
