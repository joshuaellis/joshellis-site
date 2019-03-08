/**
 *
 * Modal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Window from '../Window';

/* eslint-disable react/prefer-stateless-function */
function Modal(props) {
  const { title, closeWindow, message } = props;

  const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #1a1a1a;
    opacity: 0.8;
  `;

  return (
    <ModalContainer>
      <Window title={title} closeWindow={closeWindow}>
        {message}
      </Window>
    </ModalContainer>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.object,
  closeWindow: PropTypes.func,
};

export default Modal;
