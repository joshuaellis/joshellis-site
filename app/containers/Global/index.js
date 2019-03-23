/**
 *
 * Global
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ThreeBackground from 'components/ThreeBackground';
import Header from 'components/Header';
import Footer from 'components/Footer';
import injectReducer from 'utils/injectReducer';
import makeSelectGlobal from './selectors';
import reducer from './reducer';
import { dispatchCloseModal, dispatchOpenModal } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Global extends React.PureComponent {
  render() {
    const { global, openModal, closeModal } = this.props;
    return (
      <React.Fragment>
        <ThreeBackground />
        <Header />
        <Footer
          openModal={openModal}
          closeModal={closeModal}
          modalState={global.showModal}
        />
      </React.Fragment>
    );
  }
}

Global.propTypes = {
  global: PropTypes.object.isRequired,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    openModal: modalID => dispatch(dispatchOpenModal(modalID)),
    closeModal: modalID => dispatch(dispatchCloseModal(modalID)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'global', reducer });

export default compose(
  withReducer,
  withConnect,
)(Global);
