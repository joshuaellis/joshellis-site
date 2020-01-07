/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';

import { Image } from 'components/Image';

import './styles.scss';

const HomeCard = ({ className, client, image, slug, title }) => (
  <Link href="/work/[project]" as={slug}>
    <a className={clsx('card card--home', className)}>
      <div className="card__meta">
        <span className="t-caption">{client}</span>
        <h3 className="t-h2">{title}</h3>
      </div>
      <div className="card__image">
        <Image img={image} sizes="(max-width: 768px) 100vw, 75vw" />
      </div>
    </a>
  </Link>
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
  <Link href="/work/[project]" as={slug}>
    <a
      className={clsx(
        'card card--pagi',
        fullWidth && 'card--full-width',
        variant === 'prev' && 'card--prev',
        variant === 'next' && 'card--next',
        className,
      )}
      style={{ backgroundColor: color }}
    >
      <div className="card__container">
        <div className="card__meta">
          <span className="t-caption">
            {variant === 'next' ? 'Next project' : 'Previous project'}
          </span>
          <h3 className="t-h4">{title}</h3>
        </div>
        <div className={clsx(fullWidth && 'card__full__container')}>
          <Image
            className="card__image"
            img={image}
            sizes="(max-width: 768px) 75vw, 50vw"
          />
        </div>
      </div>
    </a>
  </Link>
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