/* eslint-disable func-names */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space between;
  align-items: center;
  flex-direction: row;
  position: relatve;
  padding: 10% 15% 15% 15%;
`;

const ImageSlide = styled.div``;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageContainer = React.memo(
  props => (
    <Container>
      {props.children.map((x, index) => {
        const { src, alt, id, caption } = x;
        return (
          <ImageSlide
            id={index}
            key={`image_${id}_${alt}`}
            sliding={props.sliding}
            currentSlide={props.currentSlide}
            index={index}
          >
            <IMG src={src} alt={alt} id={id} />
            <p
              style={{
                width: '100%',
                textAlign: 'left',
                marginTop: '4px',
              }}
            >
              {caption}
            </p>
          </ImageSlide>
        );
      })}
    </Container>
  ),
  areEqual,
);

function areEqual(prevProps, nextProps) {
  if (prevProps.currentSlide === nextProps.currentSlide) {
    return false;
  }
  return false;
}

export default ImageContainer;
