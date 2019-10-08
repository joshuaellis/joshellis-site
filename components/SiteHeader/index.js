/**
 *
 * SiteHeader
 *
 */

import React, { memo } from 'react';

import './styles.scss';

function SiteHeader() {
  return (
    <div className="site__header">
      <h1>
        Hello,
        <br />
        I&apos;m Josh Ellis.
      </h1>
    </div>
  );
}

export default memo(SiteHeader);
