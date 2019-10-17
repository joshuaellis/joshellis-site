import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './styles.scss';

function LargeUrl({ children, className, href }) {
  return (
    <a className={clsx('largeurl', className)} rel="no_opener" href={href}>
      {children}
    </a>
  );
}

LargeUrl.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
};

export default memo(LargeUrl);
