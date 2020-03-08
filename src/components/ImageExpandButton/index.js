/**
 *
 * ImageExpandButton
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ExpandIcon from 'icons/expand.svg';

function ImageExpandButton({ className, id, onClick }) {
  return (
    <StyledButton
      aria-label="Expand image"
      type="button"
      className={className}
      onClick={onClick}
      data-modal-id={id}
    >
      <ExpandIcon width={16} height={16} />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  border-bottom-left-radius: 6px;
  padding: 0;
  border: none;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  cursor: pointer;
`;

ImageExpandButton.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(ImageExpandButton);
