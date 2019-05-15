/**
 *
 * Dropdown
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Menu from '../Menu';

function Dropdown(props) {
  const { title, dropdownStyle, projects } = props;
  const [active, setActive] = useState(false);
  const wrapper = React.createRef();
  // eslint-disable-next-line func-names
  const handleClickOutside = function(event) {
    if (wrapper.current && !wrapper.current.contains(event.target)) {
      if (active) {
        setActive(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  });
  return (
    <Wrapper ref={wrapper} style={dropdownStyle}>
      <DropdownWrapper onClick={() => setActive(!active)}>
        <h2>{title}</h2>
        <SVGButton active={active} type="button">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g transform="translate(34 112) rotate(-90)">
              <rect width="24" height="24" fill="none" />
              <path
                d="M96.929-22l8.132-8.132a1.5,1.5,0,0,0,0-2.121h0a1.5,1.5,0,0,0-2.122,0l-8.131,8.132-.9.9a1.72,1.72,0,0,0,0,2.434l.9.9,8.131,8.132a1.5,1.5,0,0,0,2.122,0h0a1.5,1.5,0,0,0,0-2.121Z"
                fill="#fdfdfd"
              />
            </g>
          </svg>
        </SVGButton>
      </DropdownWrapper>
      {active ? (
        <Menu onClick={() => setActive(false)} projects={projects} />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
  @media (min-width: 1280px) {
    margin-left: 74px;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1280px) {
    justify-content: flex-start;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SVGButton = styled.button`
  margin-left: 16px;
  border: none;
  padding: 0px;
  background-color: transparent;
  transform: ${props => (props.active ? 'rotate(180deg)' : 'rotate(0)')};
`;

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  dropdownStyle: PropTypes.object,
  projects: PropTypes.object,
};

export default Dropdown;
