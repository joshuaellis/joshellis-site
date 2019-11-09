/* eslint-disable react/prop-types */
/**
 *
 * InfoModal
 *
 */

import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

import Text from 'components/Text';
import { testMarkdownLink } from 'lib/utils';

import './styles.scss';

function InfoModal({ className, content }) {
  useEffect(() => {
    document.querySelector('.main').style.overflow = 'hidden';
    return () => {
      document.querySelector('.main').style.overflow = 'auto';
    };
  }, []);

  const aboutSerializer = (container = 'div') => ({
    types: {
      block: ({ children }) =>
        children[0].length > 0 ? <span>{children}</span> : <br />,
    },
    marks: {
      color: ({ mark: { hex }, children }) => (
        <span className="generic__colour-text" style={{ color: hex }}>
          {testMarkdownLink(children[0])}
        </span>
      ),
    },
    container,
  });

  const renderCollabText = () => {
    const textArr = content.collaboration_text.split(/(\[)/);
    const markdown = testMarkdownLink(textArr.slice(1).join(''));
    return [textArr[0], markdown];
  };

  return (
    <div
      className={clsx('info-modal', className)}
      style={{ top: window.scrollY ? `${window.scrollY}px` : '0px' }}
    >
      <div className="info-modal__inner">
        <div className="info-modal__titles">
          <BlockContent
            blocks={content.copy}
            serializers={aboutSerializer('h2')}
          />
        </div>
        <div className="info-modal__colab">
          <Text text={renderCollabText()}>
            <h3 className="info-modal__colab__title">Collaboration</h3>
          </Text>
        </div>
      </div>
    </div>
  );
}

InfoModal.propTypes = {
  className: PropTypes.string,
  content: PropTypes.object,
};

export default InfoModal;
