/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
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

export default class Footer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    return (
      <React.Fragment>
        {showModal ? (
          <Modal
            id="changelog_modal"
            title="Changelog"
            message={CHANGE_LOG_TEXT}
            closeWindow={this.hideModal}
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
                onClick={this.showModal}
                style={{ marginTop: 8, width: '100%', cursor: 'pointer' }}
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
}
