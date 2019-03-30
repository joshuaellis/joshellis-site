/* eslint-disable func-names */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ImageContainer(props) {
  const { children, position, numSlides, sliding, direction } = props;
  const getOrder = itemIndex => {
    const numItems = children.length;
    if (numItems === 2) return itemIndex;

    if (itemIndex - position < 0)
      return numItems - Math.abs(itemIndex - position);
    return itemIndex - position;
  };
  return (
    <Container>
      <Wrapper>
        {/* why not in middle??!?!?!?!?!?!?!?!?!? */}
        <OverflowContainer
          sliding={sliding}
          direction={direction}
          numSlides={numSlides}
        >
          {children.map((x, index) => {
            const { src, alt, id, caption } = x;
            return (
              <ImageSlide
                id={index}
                key={`image_${id}_${alt}`}
                position={position}
                index={index}
                order={getOrder(index)}
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
        </OverflowContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relatve;
`;

const Wrapper = styled.div`
  overflow: hidden;
  margin: 10% 15% 15% 15%;
  width: 70%;
`;

const OverflowContainer = styled.div`
  display: flex;
  margin: 0 0 32px 0px;
  transition: ${props => (props.sliding ? 'none' : 'transform 1s ease')};
  transform: ${props => {
    if (props.numSlides === 1) return 'translateX(0%)';
    if (props.numSlides === 2) {
      if (!props.sliding && props.direction === 'next')
        return 'translateX(calc(-100% + 32px))';
      if (!props.sliding && props.direction === 'prev') return 'translateX(0%)';
      if (props.direction === 'prev') return 'translateX(calc(-100% + 32px))';
      return 'translateX(0%)';
    }
    if (!props.sliding) return 'translateX(calc(-100% - 32px))';
    if (props.direction === 'prev')
      return 'translateX(calc(2 * (-100% - 20px)))';
    return 'translateX(0%)';
  }};
`;

const ImageSlide = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  margin-right: 32px;
  order: ${props => props.order};
`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

ImageContainer.propTypes = {
  children: PropTypes.array,
  position: PropTypes.number,
  numSlides: PropTypes.number,
  sliding: PropTypes.bool,
  direction: PropTypes.string,
};

export default ImageContainer;
