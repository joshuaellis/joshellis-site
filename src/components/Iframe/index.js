import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from 'components/Loader';

import { COLORS } from 'styles';

function Iframe({ className, src, title }) {
  const [loading, setLoading] = useState(true);
  return (
    <IframeContainer className={className}>
      {loading && (
        <IframeLoader>
          <Loader size="32px" />
        </IframeLoader>
      )}
      <iframe
        title={title}
        src={src}
        frameBorder={0}
        allow
        allowFullScreen
        onLoad={() => setLoading(false)}
      />
    </IframeContainer>
  );
}

export const IframeContainer = styled.div`
  overflow: hidden;
  background-color: ${COLORS.footBg};
  position: relative;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: (16 / 9) * 100%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 0;
  }
`;

const IframeLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

Iframe.defaultProps = {
  title: 'project video',
};

Iframe.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Iframe;
