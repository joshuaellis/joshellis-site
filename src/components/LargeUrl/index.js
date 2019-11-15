import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './styles.scss';

function LargeUrl({ children, className }) {
  const [title, href] = children;
  return (
    <a
      className={clsx('largeurl', className)}
      rel="no_opener"
      target="_blank"
      href={href}
    >
      {title}
    </a>
  );
}

LargeUrl.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
};

export default memo(LargeUrl);
