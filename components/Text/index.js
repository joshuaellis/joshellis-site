import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './styles.scss';

function Text({ children, className, text }) {
  return (
    <div className={clsx('text', className)}>
      {children}
      <span className="text__ornament" />
      <p className="t-body">{text}</p>
    </div>
  );
}

Text.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default memo(Text);
