/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components'
import { Helmet } from 'react-helmet';

import Header from 'components/Header';
import Footer from 'components/Footer';
import ConfusedTravolta from 'images/johnTravolta.gif'

const FlexDiv = styled.div`
  display:flex;
  align-items:flex-start;
  justify-content: space-between;
  margin: 40px 56px 80px 56px;
`;

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Josh Ellis – Oops!</title>
        </Helmet>
        <Header lost='true' />
        <FlexDiv>
          <h2>Oops! This page doesn't exist.</h2>
          <img height='320px' src={ConfusedTravolta} alt="lost travolta" />
        </FlexDiv>
        <Footer />
      </div>
    );
  }
}
