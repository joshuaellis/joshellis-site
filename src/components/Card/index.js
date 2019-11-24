import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Image } from 'components/Image';

import './styles.scss';

const HomeCard = ({ className, client, fullWidth, image, slug, title }) => (
  <a
    className={clsx(
      'card card--home',
      fullWidth && 'card--full-width',
      className,
    )}
    href={`work/${slug}`}
  >
    <div className="card__meta">
      <span className="t-caption">{client}</span>
      <h3 className="t-h2">{title}</h3>
    </div>
    <div className="card__image">
      <Image img={image} sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  </a>
);

const NextPrevCard = ({}) => {};

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

HomeCard.propTypes = {
  className: PropTypes.string,
  client: PropTypes.string,
  fullWidth: PropTypes.bool,
  image: PropTypes.object,
  slug: PropTypes.string,
  title: PropTypes.string,
};

NextPrevCard.propTypes = {
  variant: PropTypes.string,
};

export default memo(Card);
