/* eslint-disable react/jsx-curly-brace-presence */
/**
 *
 * Standfirst
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES,
  MISC,
} from 'styles';

function Standfirst({ className }) {
  // const [isStuck, setIsStuck] = useState(false);
  // const stickyRef = useRef(null);

  // const handleScroll = () => {
  //   const windowWidth = window.innerWidth;
  //   if (stickyRef.current) {
  //     if (windowWidth >= BREAKPOINTS.desktop) {
  //       setIsStuck(
  //         stickyRef.current.getBoundingClientRect().top <=
  //           HEADER_HEIGHTS.desktop,
  //       );
  //     } else if (windowWidth >= BREAKPOINTS.tablet) {
  //       setIsStuck(
  //         stickyRef.current.getBoundingClientRect().top <=
  //           HEADER_HEIGHTS.tablet,
  //       );
  //     } else {
  //       setIsStuck(
  //         stickyRef.current.getBoundingClientRect().top <=
  //           HEADER_HEIGHTS.mobile,
  //       );
  //     }
  //   }
  // };

  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', () => handleScroll);
  //   };
  // }, []);

  return (
    <StandfirstDiv className={className}>
      <StandfirstContainer>
        <StandfirstCopy>
          <span>{"Here's my work –"}</span>
        </StandfirstCopy>
      </StandfirstContainer>
    </StandfirstDiv>
  );
}

const StandfirstDiv = styled.div`
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  padding-top: 12px;
  padding-bottom: 16px;
  position: fixed;
  top: ${MISC.mobileHeaderHeight}px;
  left: 0;
  z-index: 10;
  width: 100%;
  box-shadow: 0 2px 6px 0 rgba(26, 26, 26, 0.56);

  ${MEDIA_QUERIES.tabletUp} {
    padding-top: 0;
    padding-bottom: 28px;
    top: ${MISC.tabletHeaderHeight}px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    top: ${MISC.desktopHeaderHeight}px;
  }
`;

const StandfirstContainer = styled.div`
  padding: 0 16px;

  ${MEDIA_QUERIES.tabletUp} {
    padding: 0 40px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin: 0 auto;
    max-width: ${MISC.maxWidth + MISC.pageGutter * 5}px;
    padding: 0 80px;
  }
`;

const StandfirstCopy = styled.h2`
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.mediumSmall};
  line-height: ${LINE_HEIGHTS.mediumSmall};
  font-weight: 500;

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.large};
    line-height: ${LINE_HEIGHTS.large};
  }

  ${MEDIA_QUERIES.desktopUp} {
    font-size: ${FONT_SIZES.larger};
  }
`;

Standfirst.propTypes = {
  className: PropTypes.string,
};

export default memo(Standfirst);
