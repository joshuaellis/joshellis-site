/**
 *
 * ImageExpandButton
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ExpandIcon from 'icons/expand.svg';

import './styles.scss';

function ImageExpandButton({ className, id, onClick }) {
  return (
    <button
      aria-label="Expand image"
      type="button"
      className={clsx('button--expand', className)}
      onClick={onClick}
      data-modal-id={id}
    >
      <ExpandIcon width={16} height={16} />
    </button>
  );
}

ImageExpandButton.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(ImageExpandButton);
