import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function MetaData({ className }) {
  return (
    <div className={clsx('metadata', className)}>
      <ul></ul>
    </div>
  );
}

MetaData.propTypes = {
  className: PropTypes.string,
};

export default memo(MetaData);
