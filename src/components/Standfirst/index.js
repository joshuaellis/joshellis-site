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

export default memo(Standfirst);
