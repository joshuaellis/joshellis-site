/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/**
 *
 * WorkMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './WorkMenu.css';

/* eslint-disable react/prefer-stateless-function */
function WorkMenu(props) {
  const handleHoverOn = e => {
    let x = e.target;
    while (x.id !== 'parentLi') {
      x = x.parentNode;
    }
    x.children[0].children[1].setAttribute('r', '10');
    props.updateProject(x.getAttribute('data-tag'), true);
  };
  const handleHoverOff = e => {
    let x = e.target;
    while (x.id !== 'parentLi') {
      x = x.parentNode;
    }
    x.children[0].children[1].setAttribute('r', '6');
  };
  const handleKey = e => {
    if (e.key === 'Enter') {
      let x = e.target;
      while (x.id !== 'parentLi') {
        x = x.parentNode;
      }
      x.children[0].children[1].setAttribute('r', '6');
    }
  };
  const projectLength = props.projects.length;
  return (
    <Div>
      <ul>
        {props.projects.map((x, index) => (
          <li data-tag={x} id="parentLi" key={x}>
            {index + 1 === projectLength ? (
              <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 82">
                <rect style={{ fill: 'none' }} width="20" height="82" />
                <circle cx="10" cy="10" r="6" />
              </SVG>
            ) : (
              <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 82">
                <rect style={{ fill: 'none' }} width="20" height="82" />
                <circle cx="10" cy="10" r="6" />
                <rect x="9" y="10" width="2" height="72" />
              </SVG>
            )}
            <a
              onClick={handleHoverOn}
              onMouseEnter={handleHoverOn}
              onMouseLeave={handleHoverOff}
              onKeyDown={handleKey}
            >
              <span>
                {`//0`}
                {index + 1}
              </span>{' '}
              {x}
            </a>
          </li>
        ))}
        )}
      </ul>
    </Div>
  );
}

const SVG = styled.svg`
  width: 20px;
  position: relative;
  top: 35px;
  margin-right: 10px;
  margin-top: -4px;
`;

const Div = styled.div`
  whitespace: nowrap;
  margin-top: -88px;
  height: 336px;
  padding-right: 24px;
  overflow-x: hidden;
`;

WorkMenu.propTypes = {
  projects: PropTypes.array.isRequired,
  updateProject: PropTypes.func,
};

export default WorkMenu;
