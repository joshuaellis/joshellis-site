import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { TextTitle, TextCopy } from 'components/Text'

import { FONT_STYLE_SURT_14_300 } from 'references/styles/fonts'

const SECTIONS = ['about', 'experience', 'social']
const EXPERIENCE_AMOUNT = 3
const SOCIAL_AMOUNT = 2

export default function ContentHomeSections () {
  return SECTIONS.map(section => (
    <HomeSection key={section}>
      <HomeSectionTitle tag='h2'>
        <FormattedMessage
          fontStyle={FONT_STYLE_SURT_14_300}
          id={`home.${section}.title`}
        />
      </HomeSectionTitle>
      {renderSection(section)}
    </HomeSection>
  ))
}

const renderSection = section => {
  switch (section) {
    case 'about':
      return (
        <HomeSectionCopy>
          <FormattedMessage id={`home.${section}.content`} />
        </HomeSectionCopy>
      )
    case 'experience':
      return (
        <HomeSectionCopy>
          {Array(EXPERIENCE_AMOUNT)
            .fill({})
            .map((_, i) => (
              <HomeSectionFlex key={i}>
                <HomeSectionCopy>
                  <FormattedMessage id={`home.${section}.content.${i}.place`} />
                </HomeSectionCopy>
                <HomeSectionCopy>
                  <FormattedMessage id={`home.${section}.content.${i}.time`} />
                </HomeSectionCopy>
              </HomeSectionFlex>
            ))}
        </HomeSectionCopy>
      )
    case 'social':
      return (
        <HomeSectionList>
          {Array(SOCIAL_AMOUNT)
            .fill({})
            .map((_, i) => (
              <HomeSectionListItem tag='li' key={i}>
                <FormattedMessage id={`home.${section}.content.${i}.label`}>
                  {label => (
                    <FormattedMessage id={`home.${section}.content.${i}.href`}>
                      {href => (
                        <a href={href} rel='nofollow noopener noreferrer'>
                          {label}
                        </a>
                      )}
                    </FormattedMessage>
                  )}
                </FormattedMessage>
              </HomeSectionListItem>
            ))}
        </HomeSectionList>
      )
    default:
      console.warn('CONTENT_HOME_SECTION SECTION NOT HANDLED')
  }
}

const HomeSection = styled.section`
  margin-bottom: 6.4rem;
`

const HomeSectionTitle = styled(TextTitle)`
  margin-left: 3.2rem;
`

const HomeSectionCopy = styled(TextCopy)``

const HomeSectionList = styled.ul``

const HomeSectionListItem = styled(TextTitle)``

const HomeSectionFlex = styled.div``
