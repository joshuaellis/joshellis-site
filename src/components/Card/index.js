import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './styles.scss';

const HomeCard = ({}) => {};

const NextPrevCard = ({ variant }) => {};

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

HomeCard.propTypes = {};

NextPrevCard.propTypes = {
  variant: PropTypes.string,
};

export default memo(Card);
