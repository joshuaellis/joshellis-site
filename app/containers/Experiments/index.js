/**
 *
 * Experiments
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import injectReducer from "utils/injectReducer";
import makeSelectExperiments from "./selectors";
import reducer from "./reducer";

/* eslint-disable react/prefer-stateless-function */
export class Experiments extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Experiments</title>
          <meta name="description" content="Description of Experiments" />
        </Helmet>
      </div>
    );
  }
}

Experiments.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  experiments: makeSelectExperiments()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "experiments", reducer });

export default compose(
  withReducer,
  withConnect
)(Experiments);
