/**
 *
 * SiteHeader
 *
 */

import React, { memo } from 'react';

function SiteHeader() {
  return (
    <div>
      <h1>
        Hello,
        <br />
        I&apos;m Josh Ellis.
      </h1>
    </div>
  );
}

// const TitleWrapper = styled.div`
//   width: 100%;
//   background-color: ${PALETTE.black};
//   padding: 16px;
//   position: fixed;
//   top: 0px;
//   z-index: 20;
//   @media (min-width: 768px) {
//     padding: 24px 32px;
//   }

//   @media (min-width: 1280px) {
//     padding: 32px 56px;
//   }
// `;

SiteHeader.propTypes = {};

export default memo(SiteHeader);
