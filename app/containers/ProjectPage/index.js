/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/**
 *
 * ProjectPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import ProjectHeader from 'components/ProjectHeader';
import Footer from 'components/Footer';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProjectPage from './selectors';
import reducer from './reducer';
import { SET_PROJECT_ACTION } from './actions';

import { CONTENT, PALETTE, MOBILE_TITLES, PROJECTS } from '../../constants';

export function ProjectPage(props) {
  useInjectReducer({ key: 'projectPage', reducer });
  const { location, dispatchSetProjectAction } = props;
  const project = location.pathname.replace('/', '').replace(/-/g, ' ');
  let title = project;
  if (window.innerWidth < 480) {
    title = MOBILE_TITLES[title];
  }
  useEffect(() => {
    dispatchSetProjectAction(title);
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>{`${project} – Josh Ellis`}</title>
        <meta
          name="description"
          content={`${
            CONTENT[project][0] ? CONTENT[project][0].content : null
          }`}
        />
      </Helmet>
      <ProjectHeader projectList={PROJECTS} projectTitle={title} />
      <ArticleGrid>
        {CONTENT[project].length !== 0
          ? CONTENT[project].map(item => {
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
                  <Image id={item.id} src={item.content} alt={item.alt} />
                  <label className="imageCaption">{item.caption}</label>
                </ImageContainer>
              );
            }
            if (item.type === 'img-carousel') {
              return (
                <ImageContainer key={item.id}>
                  {item.content.map(x => (
                    <CarouselContainer>
                      <Image id={x.id} src={x.content} alt={x.alt} />
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
                <IFrameSection>
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
          })
          : null}
      </ArticleGrid>
      <Footer project />
    </React.Fragment>
  );
}

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: [full-start] 16px [main-start] auto [main-end] 16px [full-end];
  padding-top: 64px;
  p {
    grid-column: main;
  }
  section {
    grid-column: full;
  }
  @media (min-width: 768px) {
    padding-top: 72px;
    grid-template-columns: [full-start] 66px [main-start] auto [main-end] 66px [full-end];
  }
  @media (min-width: 1280px) {
    grid-template-columns: [full-start] 111px [main-start] auto [main-end] 111px [full-end];
    padding-top: 88px;
  }
`;

const ImageContainer = styled.section`
  width: 100%;
  padding: 20px 16px;
  background-color: ${PALETTE.photoBackground};
  margin: 12px 0px;
  @media (min-width: 768px) {
    padding: 24px 66px 32px 66px;
    margin: 40px 0px;
  }
  @media (min-width: 1280px) {
    padding: 32px 111px 40px 111px;
  }
`;

const CarouselContainer = styled.div`
  margin: 24px 0px;
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 0px;
  }
  @media (min-width: 768px) {
    margin: 32px 0px;
  }
  @media (min-width: 1280px) {
    margin: 40px 0px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  @media (min-width: 1280px) {
    max-width: calc(((100% - (13 * 16px)) / 14) * 13);
    display: block;
  }
`;

const Paragraph = styled.p`
  margin: 12px 0px;
  &.standfirst {
    margin-top: 16px;
  }
  @media (min-width: 768px) {
    margin: 16px 0px;
    &.standfirst {
      margin-top: 32px;
    }
  }
  @media (min-width: 1280px) {
    max-width: 576px;
    &.standfirst {
      margin-top: 40px;
      font-size: 1.8rem;
      line-height: 26px;
    }
  }
`;

const Url = styled.h3`
  grid-column: main;
  margin: 12px 0px;
  a {
    border-left: solid 2px ${PALETTE.green};
    padding: 0px 0px 2px 4px;
  }
  @media (min-width: 768px) {
    margin: 16px 0px 40px 0px;
    a {
      padding: 0px 0px 2px 6px;
    }
  }
  @media (min-width: 1280px) {
    font-size: 2.6rem;
    a {
      border-left: solid 4px ${PALETTE.green};
    }
  }
`;

const IFrameSection = styled(ImageContainer)`
  @media (min-width: 1280px) {
    padding: 0px;
    padding-left: 111px;
  }
`;

const IFrameContainer = styled.div`
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
`;

const IFrame = styled.iframe`
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  @media (min-width: 1280px) {
    max-width: calc(((100% - (13 * 16px)) / 14) * 13);
  }
`;

ProjectPage.propTypes = {
  location: PropTypes.object,
  dispatchSetProjectAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  projectPage: makeSelectProjectPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetProjectAction: project => dispatch(SET_PROJECT_ACTION(project)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProjectPage);
