/**
 *
 * ArticleMetaBlock
 *
 */

import React, { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function ArticleMetaBlock({ children }) {
  return (
    <ul className="article__meta-list">
      {children.map(child => (
        <li className="article__meta-item">{child}</li>
      ))}
    </ul>
  );
}

ArticleMetaBlock.propTypes = {
  children: PropTypes.array,
};

export default memo(ArticleMetaBlock);
