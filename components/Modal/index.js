/**
 *
 * ImageModal
 *
 */

import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Close from 'icons/close.svg';
import IconButton from '../IconButton';

import './styles.scss';

function Modal({ children, className, onCloseClick }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className={clsx('modal', className)}
      style={{ top: window.scrollY ? `${window.scrollY}px` : '0px' }}
    >
      {children}
      <IconButton className="modal__button" onClick={onCloseClick}>
        <Close height={24} width={24} />
      </IconButton>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  onCloseClick: PropTypes.func,
};

export default Modal;
