/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function InfoPanel(props) {
  const { project, showProject, openGallery, hasImages } = props;
  const text = props.text[project];
  return (
    <Wrapper>
      <TextWrapper>
        {showProject ? (
          <ContentContainer>
            <TopSection>
              <Col01>
                <P>
                  <Span>Role: </Span> {text[0]}
                </P>
                <P>
                  <Span>Studio: </Span> {text[1]}
                </P>
                <P>
                  <Span>Year: </Span> {text[2]}
                </P>
              </Col01>
              <Col02>
                {text[4] ? (
                  <P>
                    <Span>See here: </Span>
                    <a target="_blank" href={text[4]}>
                      {text[5]}
                    </a>
                  </P>
                ) : null}
                {text[6] && hasImages ? (
                  <P>
                    <Span>Images: </Span>
                    <Button onClick={openGallery} type="button">
                      Click here
                    </Button>
                  </P>
                ) : null}
              </Col02>
            </TopSection>
            <BottomSection>
              <P>
                <Span>INFO: </Span>
                {text[3]}
              </P>
            </BottomSection>
          </ContentContainer>
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
      <ColourLayer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-column: 2;
  padding: 16px 48px 48px 48px;
  position: relative;
  max-height: 100%;
  overflow: scroll;
  @media (min-width: 1280px) {
    padding: 16px 48px 48px 96px;
  }
  @media (min-width: 1920px) {
  }
`;

const TextWrapper = styled.div`
  background-color: rgba(271, 59, 255, 0.35);
  padding: 16px 64px 32px 24px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  max-height: 100%;
  overflow: scroll;
  @media (min-width: 1280px) {
    padding: 24px 64px 40px 32px;
  }
  @media (min-width: 1920px) {
  }
`;
const ColourLayer = styled.div`
  background-color: rgba(249, 56, 35, 0.35);
  width: calc(100% - 106px);
  height: calc(100% - 64px);
  position: absolute;
  bottom: 80px;
  right: 88px;
  z-index: 1;
  @media (min-width: 1280px) {
    width: calc(100% - 154px);
  }
  @media (min-width: 1920px) {
  }
`;

const Span = styled.span`
  font-family: 'FRAC-Regular';
  font-weight: 400;
  letter-spacing: -0.01em;
`;

const P = styled.p`
  margin-bottom: 16px;
  white-space: pre-line;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 24px;
`;

const TopSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Col01 = styled.div`
  grid-column: 1;
  padding-right: 16px;
`;

const Col02 = styled.div`
  grid-column: 2;
  padding-left: 16px;
`;

const BottomSection = styled.section`
  margin-top: 16px;
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
  hasImages: PropTypes.array,
};

export default InfoPanel;
