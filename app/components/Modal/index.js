/**
 *
 * Modal
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Window from '../Window';

/* eslint-disable react/prefer-stateless-function */
function Modal(props) {
  const { title, closeWindow, message } = props;

  const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(26, 26, 26, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999;
  `;

  const JSX_MODAL = (
    <ModalContainer>
      <Window title={title} closeWindow={closeWindow} message={message} />
    </ModalContainer>
  );

  return ReactDOM.createPortal(JSX_MODAL, document.querySelector('#modal'));
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  closeWindow: PropTypes.func,
};

export default Modal;
