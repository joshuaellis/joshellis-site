import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ImageExpandButton from 'components/ImageExpandButton';
import { setImageModalStateAction } from 'store/actions/projectActions';

import './styles.scss';

function InlineImage({
  caption,
  children,
  className,
  color,
  expandId,
  keys,
  style,
  ...restProps
}) {
  const dispatch = useDispatch();
  const handleExpandClick = e =>
    dispatch(
      setImageModalStateAction(
        e.currentTarget.getAttribute('data-modal-id'),
        true,
      ),
    );

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
            <div className="inlineimage__container__inner" key={caption[i]}>
              <ImageExpandButton
                className="inlineimage__expand"
                id={keys[i]}
                onClick={handleExpandClick}
              />
              <div className="inlineimage__image">{x}</div>
              <p className="inlineimage__caption t-caption">{caption[i]}</p>
            </div>
          ))
        ) : (
          <div className="inlineimage__container__inner">
            <ImageExpandButton
              className="inlineimage__expand"
              id={expandId}
              onClick={handleExpandClick}
            />
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
  expandId: PropTypes.string,
  expandClick: PropTypes.func,
  keys: PropTypes.array,
  style: PropTypes.object,
};

InlineImage.defaultProps = {
  color: 'transparent',
  style: {},
};

export default memo(InlineImage);
