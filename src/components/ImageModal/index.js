/**
 *
 * ImageModal
 *
 */

import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import handleModalScrollling from 'lib/handleModalScrollling';

import Close from 'icons/close.svg';

import IconButton from 'components/IconButton';
import { Image } from 'components/Image';

import './styles.scss';

function ImageModal({ img, className, onCloseClick }) {
  useEffect(handleModalScrollling, []);

  return (
    <div className={clsx('modal', className)}>
      <Image img={img} sizes="100vw" />
      <IconButton className="modal__button" onClick={onCloseClick}>
        <Close height={24} width={24} />
      </IconButton>
    </div>
  );
}

ImageModal.propTypes = {
  className: PropTypes.string,
  img: PropTypes.object,
  onCloseClick: PropTypes.func,
};

export default ImageModal;
