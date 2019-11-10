/* eslint-disable react/jsx-curly-brace-presence */
/**
 *
 * Standfirst
 *
 */

import React, { memo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { BREAKPOINTS, HEADER_HEIGHTS } from 'lib/constants';

import './styles.scss';

function Standfirst({ className, children }) {
  const [isStuck, setIsStuck] = useState(false);
  const stickyRef = useRef(null);

  const handleScroll = () => {
    const windowWidth = window.innerWidth;
    if (stickyRef.current) {
      if (windowWidth >= BREAKPOINTS.desktop) {
        setIsStuck(
          stickyRef.current.getBoundingClientRect().top <=
            HEADER_HEIGHTS.desktop,
        );
      } else if (windowWidth >= BREAKPOINTS.tablet) {
        setIsStuck(
          stickyRef.current.getBoundingClientRect().top <=
            HEADER_HEIGHTS.tablet,
        );
      } else {
        setIsStuck(
          stickyRef.current.getBoundingClientRect().top <=
            HEADER_HEIGHTS.mobile,
        );
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div className={clsx('standfirst', className)}>
      <div className="standfirst__container">
        <div className="standfirst__titles">{children}</div>
        <div ref={stickyRef}>
          <h2>
            <span>{"Here's my work –"}</span>
          </h2>
        </div>
        {isStuck && (
          <div className="standfirst__sticky--active">
            <h2>
              <span>{"Here's my work –"}</span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

Standfirst.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

// const StandfirstWrapper = styled.div`
//   background-color: ${PALETTE.black};
//   padding: 8px 16px 8px 16px;
//   h2 {
//     margin-bottom: 24px;
//   }
//   h2:last-child {
//     margin-bottom: 8px;
//   }
//   @media (min-width: 768px) {
//     padding: 16px 32px 8px 32px;
//     h2 {
//       margin-bottom: 32px;
//     }
//     h2:last-child {
//       margin-bottom: 16px;
//     }
//   }
//   @media (min-width: 1280px) {
//     padding: 0px 56px 8px 56px;
//   }
// `;

// const StickyHead = styled.div`
//   background-color: ${PALETTE.black};
//   padding: 8px 16px 16px 16px;
//   position: ${({ isFixed }) => (isFixed ? 'fixed' : 'normal')};
//   top: ${({ isFixed }) => (isFixed ? '144px' : '0px')};
//   z-index: 10;
//   width: 100%;
//   @media (min-width: 768px) {
//     padding: 8px 32px 32px 32px;
//     top: ${({ isFixed }) => (isFixed ? '208px' : '0px')};
//   }
//   @media (min-width: 1280px) {
//     padding: 8px 56px 32px 56px;
//     top: ${({ isFixed }) => (isFixed ? '246px' : '0px')};
//   }
// `;

// const Placeholder = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   background: transparent;
//   padding: 20px 0;
//   height: 60px;
//   @media (min-width: 768px) {
//     height: 76px;
//   }
//   @media (min-width: 1280px) {
//     height: 80px;
//   }
// `;

export default memo(Standfirst);
