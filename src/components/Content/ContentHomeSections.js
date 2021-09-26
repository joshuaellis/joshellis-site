import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import moment from 'moment'

import { TextTitle, TextCopy } from 'components/Text'

import { COLORS, MEDIA_QUERIES, EASINGS } from 'references/styles'
import {
  FONT_STYLE_SURT_14_300,
  FONT_STYLE_SURT_24_400,
} from 'references/styles/fonts'

const SECTIONS = ['about', 'experience', 'social']
const EXPERIENCE_AMOUNT = 4
const SOCIAL_AMOUNT = 4

export default function ContentHomeSections() {
  return SECTIONS.map((section) => (
    <HomeSection key={section}>
      <HomeSectionTitle fontStyle={FONT_STYLE_SURT_14_300} tag="h2">
        <FormattedMessage id={`home.${section}.title`} />
      </HomeSectionTitle>
      {renderSection(section)}
    </HomeSection>
  ))
}

const renderSection = (section) => {
  switch (section) {
    case 'about':
      return (
        <HomeSectionCopy fontStyle={FONT_STYLE_SURT_24_400}>
          <FormattedMessage id={`home.${section}.content`} />
        </HomeSectionCopy>
      )
    case 'experience':
      return (
        <HomeSectionDiv>
          {Array(EXPERIENCE_AMOUNT)
            .fill({})
            .map((_, i) => (
              <HomeSectionFlex key={i}>
                <TextTitle fontStyle={FONT_STYLE_SURT_24_400} tag="span">
                  <FormattedMessage id={`home.${section}.content.${i}.place`} />
                </TextTitle>
                <TextTitle fontStyle={FONT_STYLE_SURT_24_400} tag="span">
                  {i === 0 ? (
                    `${Math.floor(
                      moment
                        .duration(moment().diff(moment('19/04/21', 'DD:MM:YY')))
                        .asMonths()
                    )} months`
                  ) : (
                    <FormattedMessage
                      id={`home.${section}.content.${i}.time`}
                    />
                  )}
                </TextTitle>
              </HomeSectionFlex>
            ))}
        </HomeSectionDiv>
      )
    case 'social':
      return (
        <SocialList>
          {Array(SOCIAL_AMOUNT)
            .fill({})
            .map((_, i) => (
              <SocialListItem
                fontStyle={FONT_STYLE_SURT_24_400}
                tag="li"
                key={i}
              >
                <FormattedMessage id={`home.${section}.content.${i}.label`}>
                  {(label) => (
                    <FormattedMessage id={`home.${section}.content.${i}.link`}>
                      {(href) => {
                        const gaLabel = label[0]
                          .split(' ')
                          .join('')
                          .toLowerCase()
                        return (
                          <SocialListAnchor
                            href={href}
                            rel="nofollow noopener noreferrer"
                            data-ga-label={gaLabel}
                            id={`ga-contact-${gaLabel}`}
                          >
                            {label}
                          </SocialListAnchor>
                        )
                      }}
                    </FormattedMessage>
                  )}
                </FormattedMessage>
              </SocialListItem>
            ))}
        </SocialList>
      )
    default:
      console.warn('CONTENT_HOME_SECTION SECTION NOT HANDLED')
  }
}

const HomeSection = styled.section`
  & + & {
    margin-top: 4rem;
  }

  ${MEDIA_QUERIES.tabletUp} {
    & + & {
      margin-top: 6.4rem;
    }
  }
`

const HomeSectionTitle = styled(TextTitle)`
  position: relative;
  display: inline-block;
  z-index: 0;
  margin-left: 1.6rem;

  &:after {
    background-color: ${COLORS.turquoise};
    content: '';
    display: block;
    position: absolute;
    width: calc(100% + 1rem);
    height: 6px;
    border-radius: 4px;
    top: 50%;
    left: -0.5rem;
    transform: translateY(-50%);
    z-index: -1;
  }

  ${MEDIA_QUERIES.tabletUp} {
    margin-left: 3.2rem;

    &:after {
      width: calc(100% + 2rem);
      left: -1rem;
    }
  }
`

const HomeSectionCopy = styled(TextCopy)`
  ${MEDIA_QUERIES.tabletUp} {
    margin-right: 20%;
  }
`

const HomeSectionDiv = styled.div`
  ${MEDIA_QUERIES.tabletUp} {
    margin-right: 20%;
  }
`

const HomeSectionFlex = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > *:nth-child(2) {
    text-align: right;
  }
`

const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const SocialListItem = styled(TextTitle)`
  position: relative;
  z-index: 0;
  display: inline-block;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0.2rem;
    left: -1rem;
    height: calc(100% - 0.4rem);
    width: 0;
    z-index: 0;
    background-color: ${COLORS.pink};
    opacity: 0.7;
    transition: width 0.3s ${EASINGS.easeOutQuad};
  }

  &:hover:before {
    width: calc(100% + 2rem);
  }
`

const SocialListAnchor = styled.a`
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
`
