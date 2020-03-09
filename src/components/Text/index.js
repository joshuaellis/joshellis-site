import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES,
} from 'styles';

function Text({ children, className, text }) {
  return (
    <TextBlock className={className}>
      {children}
      <TextOrnament />
      <TextCopy>{text}</TextCopy>
    </TextBlock>
  );
}

export const TextHead = ({ children, className }) => (
  <TextBlock className={className}>
    <TextTitle>{children}</TextTitle>
    <TextOrnament />
  </TextBlock>
);

export const TextBody = ({ children, className }) => (
  <TextBlock>
    <TextCopy className={className}>{children}</TextCopy>
  </TextBlock>
);

const TextBlock = styled.div``;

const TextTitle = styled.h2`
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.defaultSmall};
  line-height: ${LINE_HEIGHTS.default};
  font-weight: 400;
  color: ${COLORS.black};

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.default};
  }
`;

const TextOrnament = styled.span`
  margin: 8px 0 16px 0;
  display: block;
  background-color: ${COLORS.black};
  height: 4px;
  width: 24px;
`;

const TextCopy = styled.p`
  font-family: ${FONT_FAMILIES.surt};
  font-size: ${FONT_SIZES.default};
  line-height: ${LINE_HEIGHTS.default};
  font-weight: 400;
  color: ${COLORS.black};

  ${MEDIA_QUERIES.tabletUp} {
    font-size: ${FONT_SIZES.defaultLarge};
    line-height: ${FONT_SIZES.defaultLarge};
  }
`;

TextHead.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

TextBody.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

TextHead.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

Text.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default memo(Text);
