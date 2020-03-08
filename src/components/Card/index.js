/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import HomeCard from './HomeCard';
import NextPrevCard from './NextPrevCard';

function Card({ variant, ...restProps }) {
  if (variant === 'next') {
    return <NextPrevCard variant="next" {...restProps} />;
  }
  if (variant === 'prev') {
    return <NextPrevCard variant="prev" {...restProps} />;
  }
  return <HomeCard {...restProps} />;
}

Card.propTypes = {
  variant: PropTypes.string,
};

export default memo(Card);
