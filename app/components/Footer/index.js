/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';

import { CHANGE_LOG_TEXT } from 'content/global.content';
import Social from '../Social';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 32px 56px 32px 56px;
  position: fixed;
  bottom: 0;
  height: 124px;
  clear: both;
  align-items: flex-start;
  margin: auto;
  max-width: 1440px;
  @media (min-height: 1440px) {
    bottom: 192px;
  }
  @media (max-width: 1059px) {
    height: 80px;
  }
`;

function Footer(props) {
  return (
    <React.Fragment>
      {props.modalState ? (
        <Modal
          id="changelog_modal"
          title="Changelog"
          message={CHANGE_LOG_TEXT}
          closeWindow={props.closeModal}
        />
      ) : null}
      <React.Fragment>
        <MediaQuery maxDeviceWidth={696}>
          <Wrapper
            style={{
              padding: '0',
              paddingLeft: '40px',
              paddingRight: '16px',
              bottom: '48px',
              height: '0px',
            }}
          >
            <Social />
          </Wrapper>
        </MediaQuery>
        <MediaQuery minDeviceWidth={697}>
          <Wrapper>
            <label
              onClick={props.openModal}
              style={{ marginTop: 8, width: '100%' }}
            >
              version 2.1
            </label>
            <Social />
          </Wrapper>
        </MediaQuery>
      </React.Fragment>
    </React.Fragment>
  );
}

Footer.propTypes = {
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  modalState: PropTypes.bool,
};

export default Footer;
