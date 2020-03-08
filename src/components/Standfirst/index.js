/* eslint-disable react/jsx-curly-brace-presence */
/**
 *
 * Standfirst
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLORS, MEDIA_QUERIES, MISC } from 'styles';

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
        <h2>
          <span>{"Here's my work –"}</span>
        </h2>
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

Standfirst.propTypes = {
  className: PropTypes.string,
};

export default memo(Standfirst);
