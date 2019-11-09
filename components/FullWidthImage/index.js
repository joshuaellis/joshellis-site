import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import Plx from 'react-plx';

import ImageExpandButton from 'components/ImageExpandButton';
import { setImageModalStateAction } from 'store/actions/projectActions';

import './styles.scss';

function FullWidthImage({
  children,
  caption,
  className,
  expandId,
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
    <div className={clsx('fullwidthimage', className)} {...restProps}>
      <ImageExpandButton
        className="fullwidthimage__expand"
        id={expandId}
        onClick={handleExpandClick}
      />
      <div className="fullwidthimage__image">{children}</div>
      <p className="fullwidthimage__caption t-caption">{caption}</p>
    </div>
  );
}

FullWidthImage.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  caption: PropTypes.string,
  expandId: PropTypes.string,
};

export default memo(FullWidthImage);
