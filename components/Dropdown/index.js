/**
 *
 * Dropdown
 *
 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu';

import './styles.scss';

function Dropdown({ title, onClick, projects, ...restProps }) {
  const [active, setActive] = useState(false);
  const wrapper = useRef();

  const handleClickOutside = event => {
    if (wrapper.current && !wrapper.current.contains(event.target)) {
      if (active) {
        setActive(false);
      }
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick(!active);
    }
    setActive(!active);
  };

  // Check if this is best way to do this.
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  });

  return (
    <div className="select__wrapper" ref={wrapper} {...restProps}>
      <div tabIndex={0} className="select" role="button" onClick={handleClick}>
        <h2>{title}</h2>
        {/* to do – create icon button */}
        <button
          className="select__button"
          active={active}
          type="button"
          style={{ transform: active ? 'rotate(180deg)' : '' }}
        >
          {/* to do – move this to an SVG and import */}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g transform="translate(34 112) rotate(-90)">
              <rect width="24" height="24" fill="none" />
              <path d="M96.929-22l8.132-8.132a1.5,1.5,0,0,0,0-2.121h0a1.5,1.5,0,0,0-2.122,0l-8.131,8.132-.9.9a1.72,1.72,0,0,0,0,2.434l.9.9,8.131,8.132a1.5,1.5,0,0,0,2.122,0h0a1.5,1.5,0,0,0,0-2.121Z" />
            </g>
          </svg>
        </button>
      </div>
      {active ? (
        <Menu onClick={() => setActive(false)} projects={projects} />
      ) : null}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  dropdownStyle: PropTypes.object,
  projects: PropTypes.object,
  onClick: PropTypes.func,
};

export default Dropdown;
