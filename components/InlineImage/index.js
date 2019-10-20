import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './styles.scss';

function InlineImage({
  caption,
  children,
  className,
  color,
  style,
  ...restProps
}) {
  return (
    <div
      className={clsx('inlineimage', className)}
      style={{ backgroundColor: color, ...style }}
      {...restProps}
    >
      <div className="inlineimage__container">
        <div>
          <div className="inlineimage__image">{children}</div>
          <p className="inlineimage__caption t-caption">{caption}</p>
        </div>
      </div>
    </div>
  );
}

InlineImage.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};

InlineImage.defaultProps = {
  color: 'transparent',
  style: {},
};

export default memo(InlineImage);
