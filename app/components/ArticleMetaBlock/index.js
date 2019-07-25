/**
 *
 * ArticleMetaBlock
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ArticleMetaBlock({ children }) {
  return (
    <ArticleMeta className="article__meta">
      {children.map(child => (
        <li className="article__meta-item">{child}</li>
      ))}
    </ArticleMeta>
  );
}

const ArticleMeta = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  .article__meta-item {
    line-height: 1.6em;
  }

  .article__meta-item:nth-child(odd) {
    line-height: 1.2em;
  }

  .article__meta-item:nth-child(even) {
    margin-bottom: 12px;
  }

  .article__meta-label {
    font-size: 0.8em;
    font-weight: 600;
  }

  @media (min-width: 1280px) {
    .article__meta-item {
      line-height: 2em;
    }
    .article__meta-item:nth-child(odd) {
      line-height: 1em;
    }
  }
`;

ArticleMetaBlock.propTypes = {
  children: PropTypes.array,
};

export default memo(ArticleMetaBlock);
