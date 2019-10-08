import React from 'react';
import PropTypes from 'prop-types';

import ArticleMetaBlock from 'components/ArticleMetaBlock';

export function ProjectLayout({ isMobile, content }) {
  return (
    <main className="project" isMobile={isMobile}>
      {content.map(item => {
        if (item.type === 'standfirst') {
          return (
            <Paragraph key={item.id} className="standfirst">
              {item.content}
            </Paragraph>
          );
        }
        if (item.type === 'paragraph') {
          return <Paragraph key={item.id}>{item.content}</Paragraph>;
        }
        if (item.type === 'image') {
          return (
            <ImageContainer key={item.id}>
              <Image
                onClick={() => dispatchOpenModalAction(true, item)}
                id={item.id}
                src={item.content}
                alt={item.alt}
              />
              <label className="imageCaption">{item.caption}</label>
            </ImageContainer>
          );
        }
        if (item.type === 'img-carousel') {
          return (
            <ImageContainer key={item.id}>
              {item.content.map(x => (
                <CarouselContainer key={x.id}>
                  <Image
                    onClick={e =>
                      dispatchOpenModalAction(true, item, e.currentTarget.id)
                    }
                    id={x.id}
                    src={x.content}
                    alt={x.alt}
                  />
                  <label className="imageCaption">{x.caption}</label>
                </CarouselContainer>
              ))}
            </ImageContainer>
          );
        }
        if (item.type === 'url') {
          return (
            <Url key={item.id}>
              <a href={item.url} rel="noopener" target="_blank">
                {item.content}
              </a>
            </Url>
          );
        }
        if (item.type === 'video') {
          return (
            <IFrameSection key={item.id}>
              <IFrameContainer>
                <IFrame
                  title={item.title || 'video'}
                  src={item.url}
                  frameBorder="0"
                  allow={item.options.allow}
                  allowFullScreen
                />
              </IFrameContainer>
            </IFrameSection>
          );
        }
        if (item.type === 'meta-data') {
          return <ArticleMetaBlock>{item.content}</ArticleMetaBlock>;
        }
      })}
    </main>
  );
}

ProjectLayout.propTypes = {
  isMobile: PropTypes.bool,
  content: PropTypes.array,
};

export default ProjectLayout;
