import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import sanity from 'lib/client'
import { testMarkdownLink, flattenArray } from 'lib/utils'
import getNextPrevItems from 'lib/pagination'

import Blocks, {
  ProjectInlineImage,
  ProjectFullWidthImage,
  ProjectMultipleInline,
  ProjectStandfirst
} from 'components/Blocks'
import MetaData from 'components/MetaData'
import LargeUrl from 'components/LargeUrl'
import Portal from 'components/Portal'
import ImageModal from 'components/ImageModal'
import Iframe, { IframeContainer } from 'components/Iframe'
import Card from 'components/Card'
import { StyledFooter } from 'components/Footer'

import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  MEDIA_QUERIES,
  MISC
} from 'styles'

import { setImageModalStateAction } from 'store/actions/projectActions'

const queries = {
  getProject: id =>
    `*[slug == '${id}' && !(_id in path("drafts.**"))]{'share_image': share_image.asset->url, ...}`,
  getNextPrevCard: () =>
    `*[_type == 'projectStructure']{
      'projects': projects[]{
        'projects':year_project[]->{card_pagination, card_full_image, title, slug, 'hex': card_color.hex}
      }
    }`
}

const renderMeta = ({ client, studio, role, tech }) => [
  { title: 'Client', copy: client },
  { title: 'Studio', copy: studio },
  { title: 'Role', copy: role },
  { title: 'Tech', copy: tech }
]

export function ProjectPage ({
  body,
  dispatchSetImageModalState,
  excerpt,
  iframe,
  imageModalId,
  meta,
  showImageModal,
  shareImg,
  slug,
  paginationItems,
  title,
  url
}) {
  const closeImageModal = () => dispatchSetImageModalState(null, false)
  const getActiveImage = () => {
    // Check the array to see if it gives us a response
    const [initialKey] = body.filter(x => x._key === imageModalId)
    if (!initialKey) {
      /**
       *
       * if we dont get an item we then need to filter the array
       * to only get the blocks that are multiple_image blocks
       * then map that array to only contain our single images
       * by flattening the array we get an array similar to the initial
       * array which we can then just filter as usual. Long, but
       * right now, I can't think of another way.
       *
       */
      const [multipleKey] = body
        .filter(x => x._type === 'multiple_images')
        .map(x => x.single_image)
        .flat()
        .filter(x => x._key === imageModalId)
      return multipleKey
    }
    return initialKey
  }
  return (
    <>
      <Head>
        <title>{`${title} | Josh Ellis`}</title>
        <meta property='og:title' content={`${title} | Josh Ellis`} />
        <meta name='description' content={excerpt} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={`${title} | Josh Ellis`} />
        <meta property='og:description' content={excerpt} />
        <meta property='og:image' content={shareImg} />
        <meta property='og:locale' content='en_UK' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta
          property='og:url'
          content={`https://www.joshellis.co.uk/work/${slug}`}
        />
        <meta property='og:site_name' content={`${title} | Josh Ellis`} />
        <meta name='twitter:title' content={`${title} | Josh Ellis`} />
        <meta name='twitter:description' content={excerpt} />
        <meta name='twitter:image' content={shareImg} />
      </Head>
      <ProjectMain>
        <ProjectHeader>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectSubHead>
            <Blocks body={body.slice(0, 1)} />
            <ProjectDivider>
              <div />
            </ProjectDivider>
            <ProjectMeta>{renderMeta(meta)}</ProjectMeta>
          </ProjectSubHead>
        </ProjectHeader>
        <Blocks body={body} />
        {url ? (
          <ProjectUrl>
            <LargeUrl>{testMarkdownLink(url, false)}</LargeUrl>
          </ProjectUrl>
        ) : null}
        {iframe ? (
          <ProjectIframe>
            <Iframe title={`${title} video`} src={iframe} />
          </ProjectIframe>
        ) : null}
      </ProjectMain>
      <ProjectPagination>
        {paginationItems.map((x, i) => (
          <Card
            key={x.title}
            color={x.hex}
            fullWidth={x.card_full_image}
            image={x.card_pagination}
            title={x.title}
            slug={x.slug}
            variant={i === 0 ? 'prev' : 'next'}
          />
        ))}
      </ProjectPagination>
      <Portal elementId='#modal'>
        {showImageModal && (
          <ImageModal
            img={imageModalId ? { ...getActiveImage() } : null}
            onCloseClick={closeImageModal}
          />
        )}
      </Portal>
    </>
  )
}

const ProjectMain = styled.main`
  width: 100%;
  z-index: 0;
  padding-top: 64px;
  display: grid;
  grid-template-columns: [left-col] 16px [centered] auto 16px [right-col];

  & > * {
    grid-column: centered;
  }

  ${ProjectMultipleInline}, ${ProjectFullWidthImage}, ${ProjectInlineImage} {
    grid-column: left-col / right-col;
  }

  ${MEDIA_QUERIES.tabletUp} {
    padding-top: 88px;
    grid-template-columns: [left-col] 8px [centered] auto 8px [right-col];
    grid-column-gap: 32px;
  }

  ${MEDIA_QUERIES.desktopUp} {
    padding-top: 56px;
    grid-template-columns: [left-col] 48px [centered] auto 48px [right-col];
    grid-column-gap: 32px;
  }
`

const ProjectHeader = styled.header`
  ${MISC.genericSection};
  width: 100%;
`

const ProjectTitle = styled.h1`
  margin-top: 20px;
  color: ${COLORS.black};
  width: 100%;
  font-family: ${FONT_FAMILIES.surt};
  font-weight: 500;
  font-size: ${FONT_SIZES.massiveSmall};
  line-height: ${LINE_HEIGHTS.massiveSmall};

  ${MEDIA_QUERIES.tabletUp} {
    margin-top: 40px;
    grid-column: 1 / 6;
    font-size: ${FONT_SIZES.massive};
    line-height: ${LINE_HEIGHTS.massive};
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin-top: 88px;
    grid-column: 1 / 9;
    font-size: ${FONT_SIZES.massiveLarge};
    line-height: ${LINE_HEIGHTS.massiveLarge};
  }
`

const ProjectSubHead = styled.div`
  ${MISC.genericSection};
  width: 100%;

  ${ProjectStandfirst} {
    display: none;
  }

  ${MEDIA_QUERIES.tabletUp} {
    grid-column: 1 / 7;

    ${ProjectStandfirst} {
      display: grid;
      grid-column: 1 / 7;
      margin-top: 64px;
      margin-bottom: 72px;
      > * {
        grid-column: 1 / 6;
      }
    }
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin-top: 72px;
    margin-bottom: 80px;
    grid-column: 1 / 13;

    ${ProjectStandfirst} {
      display: block;
      margin-top: 32px;
      margin-bottom: 40px;
      grid-column: 1 / 7;
    }
  }
`

const ProjectMeta = styled(MetaData)`
  margin-top: 36px;

  ${MEDIA_QUERIES.tabletUp} {
    margin-top: 0;
    margin-bottom: 64px;
    grid-column: 1 / 5;
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin-top: 32px;
    margin-bottom: 0;
    grid-column: 9 / 13;
  }
`

const ProjectDivider = styled.div`
  display: none;

  ${MEDIA_QUERIES.desktopUp} {
    display: flex;
    grid-column: 7 / 9;
    height: 100%;
    width: 100%;
    justify-content: center;

    > div {
      width: 2px;
      background-color: ${COLORS.footBg};
      height: 100%;
    }
  }
`

const ProjectPagination = styled.div`
  margin-top: 40px;

  & + ${StyledFooter} {
    margin-top: 0;
  }

  ${MEDIA_QUERIES.tabletUp} {
    margin-top: 96px;
    display: flex;
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin-top: 120px;
  }
`

const ProjectUrl = styled.div`
  ${MISC.genericSection};
  margin-top: 4px;
  width: 100%;

  > * {
    justify-self: flex-start;
  }

  ${ProjectInlineImage} + &,
  ${ProjectMultipleInline} + &,
  ${ProjectFullWidthImage} + & {
    margin-top: 36px;
  }

  ${MEDIA_QUERIES.tabletUp} {
    margin-bottom: 48px;

    > * {
      grid-column: 1 / 7;
      justify-self: flex-end;
    }
  }

  ${MEDIA_QUERIES.desktopUp} {
    margin-bottom: 72px;

    > * {
      grid-column: 6 / 13;
      justify-self: flex-end;
    }
  }
`

const ProjectIframe = styled.div`
  ${MISC.genericSection};
  width: 100%;

  ${MEDIA_QUERIES.tabletUp} {
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 32px;
    margin-bottom: 48px;

    ${IframeContainer} {
      grid-column: 3 / 7;
    }
  }

  ${MEDIA_QUERIES.desktopUp} {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 32px;
    margin-bottom: 72px;

    ${IframeContainer} {
      grid-column: 4 / 13;
    }
  }
`

ProjectPage.getInitialProps = async ({ query, res }) => {
  const { project } = query
  const [data] = await sanity.fetch(queries.getProject(project))
  const [{ projects }] = await sanity.fetch(queries.getNextPrevCard())
  const flattenedProjects = flattenArray(
    projects.map(x => [...x.projects])
  ).reverse()
  const paginationItems = getNextPrevItems(project, flattenedProjects)

  if (!data || data.length === 0) {
    res.writeHead(302, {
      Location: '/'
    })
    res.end()
  }
  const {
    body,
    client,
    excerpt,
    iframe,
    role,
    studio,
    tech,
    title,
    url,
    slug,
    share_image: shareImg
  } = data
  return {
    body,
    excerpt,
    iframe,
    title,
    url,
    paginationItems,
    slug,
    shareImg,
    meta: { client, role, studio, tech }
  }
}

const mapStateToProps = ({ project: { imageModal } }) => ({
  imageModalId: imageModal.imageId,
  showImageModal: imageModal.show
})

const mapDispatchToProps = dispatch => ({
  dispatchSetImageModalState: (id, show) =>
    dispatch(setImageModalStateAction(id, show))
})

ProjectPage.propTypes = {
  body: PropTypes.array,
  dispatchSetImageModalState: PropTypes.func,
  excerpt: PropTypes.string,
  iframe: PropTypes.string,
  imageModalId: PropTypes.string,
  meta: PropTypes.object,
  paginationItems: PropTypes.array,
  share_image: PropTypes.string,
  showImageModal: PropTypes.bool,
  slug: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)
