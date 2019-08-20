/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * NavMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PALETTE, COLORARR } from '../../constants';

function NavMenu(props) {
  const { projects } = props;
  const regex = /<label>/gm;
  return (
    <Wrapper>
      {Object.keys(projects)
        .sort()
        .reverse()
        .map(key => (
          <YearWrapper key={key}>
            <label className="year">{key}</label>
            <h3>
              {projects[key].map(name => (
                <React.Fragment key={name.split('<label>WIP</label>')}>
                  <StyledLink
                    index={Math.floor(Math.random() * (3 - 0 + 1)) + 0}
                    to={`/${name
                      .split('<label>WIP</label>')[0]
                      .replace(/\s/g, '-')}`}
                  >
                    {name.match(regex)
                      ? [
                          name.split('<label>WIP</label>'),
                          <label className="label">WIP</label>,
                        ]
                      : name}
                  </StyledLink>
                  <br />
                </React.Fragment>
              ))}
            </h3>
          </YearWrapper>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3px 0px 0px 0px;
  @media (min-width: 768px) {
    padding: 4px 16px 0px 16px;
  }
  @media (min-width: 1280px) {
    padding: 8px 56px 0px 56px;
  }
`;

const YearWrapper = styled.div`
  .year {
    position: relative;
    top: 4px;
    padding: 0px 16px;
    @media (min-width: 1280px) {
      padding: 0px;
    }
  }
  margin: 13px 0px;
  @media (min-width: 768px) {
    margin: 20px 0px;
    &:last-child {
      margin-bottom: 160px;
    }
  }
  @media (min-width: 1280px) {
    margin: 32px 0px;
    &:last-child {
      margin-bottom: 80px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 4px 16px;
  &:hover {
    background-color: ${props => PALETTE[COLORARR[props.index]]};
    color: ${PALETTE.white};
  }
  @media (min-width: 1280px) {
    padding: 0px;
    &:hover {
      background-color: transparent;
      box-shadow: inset 0 -2px 0 white,
        inset 0 -5px 0 ${props => PALETTE[COLORARR[props.index]]};
      color: ${PALETTE.black};
    }
  }
`;

NavMenu.propTypes = {
  projects: PropTypes.object,
};

export default NavMenu;
