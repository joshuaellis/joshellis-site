import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import './styles.scss';

function IconButton({ children, className, ...restProps }) {
  return (
    <button
      type="button"
      className={clsx('icon-button', className)}
      {...restProps}
    >
      {children}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

export default IconButton;
