import React, { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import './styles.scss';

function Loader({ className, size }) {
  return (
    <div
      className={clsx('loader', className)}
      style={{ width: size, height: size }}
    ></div>
  );
}

Loader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};

export default memo(Loader);
