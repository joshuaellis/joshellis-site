import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

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
