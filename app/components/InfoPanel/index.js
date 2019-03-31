/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

function InfoPanel(props) {
  const { project, showProject, openGallery } = props;
  const text = props.text[project];
  return (
    <Wrapper>
      <MediaQuery minWidth={1060}>
        <TextWrapper>
          {showProject ? (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <section style={{ minWidth: '272px', marginRight: '48px' }}>
                <p style={{ marginBottom: '16px' }}>
                  <Span>Role: </Span> {text[0]}
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <Span>Studio: </Span> {text[1]}
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <Span>Year: </Span> {text[2]}
                </p>
                {text[4] ? (
                  <p style={{ marginBottom: '16px' }}>
                    <Span>See here: </Span>
                    <a
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      href={text[4]}
                    >
                      {text[5]}
                    </a>
                  </p>
                ) : null}
                {text[6] ? (
                  <p>
                    <Span>Images: </Span>
                    <Button onClick={openGallery} type="button">
                      Click here
                    </Button>
                  </p>
                ) : null}
              </section>
              <section style={{ maxWidth: '312px' }}>
                <p>
                  <Span>INFO: </Span>
                  {text[3]}
                </p>
              </section>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p style={{ alignSelf: 'center', marginTop: '15%' }}>
                <Span>Select a project to view</Span>
              </p>
            </div>
          )}
        </TextWrapper>
      </MediaQuery>
      <MediaQuery maxWidth={1059}>
        <TextWrapper>
          {showProject ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <section style={{ display: 'flex' }}>
                <section
                  style={{
                    display: 'inline-block',
                    marginRight: '16px',
                    minWidth: '208px',
                  }}
                >
                  <P>
                    <Span>Role: </Span> {text[0]}
                  </P>
                  <P>
                    <Span>Year: </Span> {text[2]}
                  </P>
                </section>
                <section style={{ display: 'inline-block' }}>
                  <P>
                    <Span>Studio: </Span> {text[1]}
                  </P>
                  {/* Does this project have a URL? */}
                  {text[4] ? (
                    <p style={{ marginTop: '16px' }}>
                      <Span>See here: </Span>
                      <a
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                        href={text[4]}
                      >
                        {text[5]}
                      </a>
                    </p>
                  ) : null}
                  {text[6] ? (
                    <p>
                      <Span>Images: </Span>
                      <Button onClick={openGallery} type="button">
                        Click here
                      </Button>
                    </p>
                  ) : null}
                </section>
              </section>
              <section style={{ display: 'block' }}>
                <p>
                  <Span>INFO: </Span>
                  {text[3]}
                </p>
              </section>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p style={{ alignSelf: 'center', marginTop: '15%' }}>
                <Span>Select a project to view</Span>
              </p>
            </div>
          )}
        </TextWrapper>
      </MediaQuery>
      <ColourLayer />
    </Wrapper>
  );
}

const TextWrapper = styled.div`
  background-color: rgba(271, 59, 255, 0.35);
  text-align: left;
  padding: 16px 40px 32px 24px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  margin-bottom: auto;
`;
const ColourLayer = styled.div`
  background-color: rgba(249, 56, 35, 0.35);
  width: 100%;
  height: 100%;
  position: relative;
  bottom: calc(100% + 24px);
  right: 24px;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 672px;
  height: 344px;
  margin-top: -64px;

  @media (max-width: 1059px) {
    width: 544px;
    height: 320px;
  }
`;

const Span = styled.span`
  font-family: 'FRAC-Regular';
  font-weight: 400;
  letter-spacing: -0.01em;
`;

const P = styled.p`
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 0px;
  margin: 0px;
  &:hover {
    color: #4a94ff;
    cursor: pointer;
  }
`;

InfoPanel.propTypes = {
  text: PropTypes.object,
  project: PropTypes.string,
  showProject: PropTypes.bool,
  openGallery: PropTypes.func,
};

export default InfoPanel;
