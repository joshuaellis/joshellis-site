import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Loader from 'components/Loader';

import './styles.scss';

function Iframe({ className, src, title }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={clsx('iframe', className)}>
      {loading && (
        <div className="iframe__loader">
          <Loader size="32px" />
        </div>
      )}
      <iframe
        title={title}
        src={src}
        frameBorder={0}
        allow
        allowFullScreen
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

Iframe.defaultProps = {
  title: 'project video',
};

Iframe.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Iframe;
