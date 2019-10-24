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
      className={clsx(
        'inlineimage',
        children && children.length > 1 && 'inlineimage--multiple',
        className,
      )}
      style={{ backgroundColor: color, ...style }}
      {...restProps}
    >
      <div className="inlineimage__container">
        {children && children.length > 1 ? (
          // handles multiple images in the same container
          children.map((x, i) => (
            <div key={caption[i]}>
              <div className="inlineimage__image">{x}</div>
              <p className="inlineimage__caption t-caption">{caption[i]}</p>
            </div>
          ))
        ) : (
          <div>
            <div className="inlineimage__image">{children}</div>
            <p className="inlineimage__caption t-caption">{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}

InlineImage.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};

InlineImage.defaultProps = {
  color: 'transparent',
  style: {},
};

export default memo(InlineImage);
