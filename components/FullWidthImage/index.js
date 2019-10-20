import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import Plx from 'react-plx';

import './styles.scss';

// const parallaxData = [
//   {
//     start: 0,
//     end: 500,
//     properties: [
//       {
//         startValue: 0,
//         endValue: -100,
//         property: 'translateY',
//         unit: '%',
//       },
//     ],
//   },
// ];

function FullWidthImage({ children, caption, className, ...restProps }) {
  return (
    <div className={clsx('fullwidthimage', className)} {...restProps}>
      <div className="fullwidthimage__image">{children}</div>
      <p className="fullwidthimage__caption t-caption">{caption}</p>
    </div>
  );
}

FullWidthImage.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  caption: PropTypes.string,
};

export default memo(FullWidthImage);
