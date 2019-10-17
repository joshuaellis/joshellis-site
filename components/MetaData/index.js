import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './styles.scss';

const MetaItem = ({ children, title }) => (
  <div className="metadata__item">
    <span className="metadata__item__title">{title}</span>
    <span className="metadata__ornament" />
    {children}
  </div>
);

function MetaData({ className, children }) {
  return (
    <div className={clsx('metadata', className)}>
      {children.map(x => (
        <MetaItem title={x.title}>{x.copy}</MetaItem>
      ))}
    </div>
  );
}

MetaData.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};

MetaItem.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
};

export default memo(MetaData);
