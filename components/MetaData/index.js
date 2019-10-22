import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { testMarkdownLink } from 'lib/blocks';

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
      {children.map(x =>
        x.copy ? (
          <MetaItem title={x.title} key={x.title}>
            {testMarkdownLink(x.copy)}
          </MetaItem>
        ) : null,
      )}
    </div>
  );
}

MetaData.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};

MetaItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  title: PropTypes.string,
};

export default memo(MetaData);
