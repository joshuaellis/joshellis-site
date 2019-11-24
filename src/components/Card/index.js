import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Image } from 'components/Image';

import './styles.scss';

const HomeCard = ({ className, client, image, slug, title }) => (
  <a className={clsx('card card--home', className)} href={`work/${slug}`}>
    <div className="card__meta">
      <span className="t-caption">{client}</span>
      <h3 className="t-h2">{title}</h3>
    </div>
    <div className="card__image">
      <Image img={image} sizes="(max-width: 768px) 100vw, 75vw" />
    </div>
  </a>
);

const NextPrevCard = ({
  className,
  color,
  fullWidth,
  image,
  slug,
  title,
  variant,
}) => (
  <a
    className={clsx(
      'card card--pagi',
      fullWidth && 'card--full-width',
      variant === 'prev' && 'card--prev',
      variant === 'next' && 'card--next',
      className,
    )}
    href={`work/${slug}`}
    style={{ backgroundColor: color }}
  >
    <div className="card__container">
      <div className="card__meta">
        <span className="t-caption">
          {variant === 'next' ? 'Next project' : 'Previous project'}
        </span>
        <h3 className="t-h4">{title}</h3>
      </div>
      <Image
        className="card__image"
        img={image}
        sizes="(max-width: 768px) 75vw, 50vw"
      />
    </div>
  </a>
);

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
  image: PropTypes.object,
  slug: PropTypes.string,
  title: PropTypes.string,
};

NextPrevCard.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  image: PropTypes.object,
  slug: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.string,
};

export default memo(Card);
