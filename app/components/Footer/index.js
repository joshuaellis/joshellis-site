/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal';

import { CHANGE_LOG_TEXT } from 'content/global.content';
import Social from '../Social';

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
        <Wrapper>
          <Label onClick={this.showModal}>version 2.1</Label>
          <Social />
        </Wrapper>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  grid-column: 1;
  grid-row: 3;
  padding: 19px 16px 24px 16px;
  @media (min-width: 768px) {
    padding: 24px 48px;
  }
`;

const Label = styled.label`
  display: none;
  @media (min-width: 768px) {
    display: block;
    cursor: pointer;
    float: left;
    padding-top: 8px;
  }
`;
