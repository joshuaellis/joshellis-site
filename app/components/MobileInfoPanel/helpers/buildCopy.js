/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import styled from 'styled-components';

function buildCopy() {
  const TextWrapper = styled.div`
    background-color: rgba(271, 59, 255, 0.35);
    text-align: left;
    padding: 12px 32px 24px 16px;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10;
    margin-bottom: auto;
    @media (max-width: 320px) {
      padding: 8px 32px 24px 16px;
    }
  `;
  const Span = styled.span`
    font-family: 'FRAC-Regular';
    font-weight: 400;
    letter-spacing: -0.01em;
  `;
  let text = this.props.message;
  if (this.location === 'about') {
    return (
      <TextWrapper>
        <div style={{ height: '100%', overflowY: 'scroll' }} ref={this.copyBox}>
          <p>
            <Span>{text[0]}</Span>
            {text[1]}
          </p>
          <p style={{ marginBottom: '8px' }}>
            <Span>{text[2]}</Span>
            {text[3]}
          </p>
          <p>
            <Span>{text[4]}</Span>
            {text[5]}
          </p>
        </div>
      </TextWrapper>
    );
  }
  if (this.location === 'work') {
    text = this.props.message[this.props.project];
    if (!text) {
      return (
        <TextWrapper>
          <p>Something went wrong...</p>
        </TextWrapper>
      );
    }
    return (
      <TextWrapper>
        <div style={{ height: '100%', overflowY: 'scroll' }} ref={this.copyBox}>
          <p>
            <Span>Role: </Span>
            {text[0]}
          </p>
          <p>
            <Span>Studio: </Span>
            {text[1]}
          </p>
          <p>
            <Span>Year: </Span>
            {text[2]}
          </p>
          {text[4] ? (
            <p>
              <Span>See Here: </Span>
              <a
                target="_blank"
                style={{ textDecoration: 'none' }}
                href={text[4]}
              >
                {text[5]}
              </a>
            </p>
          ) : null}
          <p style={{ marginTop: '16px' }}>
            <Span>Info: </Span>
            {text[3]}
          </p>
        </div>
      </TextWrapper>
    );
  }
  return null;
}

export default buildCopy;
