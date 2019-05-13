/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Menu
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PALETTE, COLORARR } from '../../constants';

function Menu(props) {
  const { projects } = props;
  const regex = /<label>/gm;
  return (
    <Wrapper>
      {Object.keys(projects)
        .sort()
        .reverse()
        .map((key, index) => (
          <YearWrapper index={index} key={key}>
            <label className="year white">{key}</label>
            <h3>
              {projects[key].map(name => (
                <React.Fragment>
                  <StyledLink
                    className="white"
                    key={name.split('<label>WIP</label>')}
                    to={`/${name
                      .split('<label>WIP</label>')[0]
                      .replace(/\s/g, '-')}`}
                  >
                    {name.match(regex)
                      ? [
                          name.split('<label>WIP</label>'),
                          <label
                            className="label white"
                            key={key.split('<label>WIP</label>')}
                          >
                            WIP
                          </label>,
                        ]
                      : name}
                  </StyledLink>
                </React.Fragment>
              ))}
            </h3>
          </YearWrapper>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px 16px 24px 16px;
  background-color: ${PALETTE.black};
  width: 100%;
  max-height: 440px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  @media (min-width: 768px) {
    padding: 8px 32px 18px 32px;
    max-height: 528px;
  }
  @media (min-width: 1280px) {
  }
`;

const YearWrapper = styled.div`
  .year {
    position: relative;
    top: 4px;
    @media (min-width: 1280px) {
      padding: 0px;
    }
  }
  margin: 12px 0px;
  border-top: solid 1px ${props => PALETTE[COLORARR[props.index]]};
  @media (min-width: 768px) {
    margin: 32px 0px;
  }
  @media (min-width: 1280px) {
    margin: 32px 0px;
    &:last-child {
      margin-bottom: 80px;
    }
  }
`;

const StyledLink = styled.h3`
  text-decoration: none;
`;

Menu.propTypes = {
  projects: PropTypes.object,
};

export default memo(Menu);
