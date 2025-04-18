import { ReactNode, FC } from 'react'
import { NextSeo } from 'next-seo'
import * as Avatar from '@radix-ui/react-avatar'
import { styled } from 'styles/stitches.config'
import Balancer, { Provider } from 'react-wrap-balancer'

import { Flex } from 'components/Flex'
import { Box } from 'components/Box'

import { Anchor, AnchorProps } from 'components/Text/Anchor'
import { Heading } from 'components/Text/Heading'
import { Copy } from 'components/Text/Copy'
import Link from 'next/link'

const BALANCE_RATIO = 0.5

interface Item extends Pick<AnchorProps, 'variant'> {
  title: string
  href?: string
  description?: string
}

interface Section {
  title: string
  items: Item[]
}

const MID_SECTION: Section[] = [
  {
    title: 'Projects',
    items: [
      {
        title: 'react-spring',
        href: 'https://react-spring.io',
        variant: 'outlink',
        description: 'A spring physics based animation library.',
      },
      {
        title: '@react-three/fiber',
        href: 'https://github.com/pmndrs/react-three-fiber',
        variant: 'outlink',
        description: 'A react renderer for threejs in the browser or native.',
      },
      {
        title: '@react-three/test-renderer',
        href: 'https://github.com/pmndrs/react-three-fiber/tree/master/packages/test-renderer',
        variant: 'outlink',
        description: 'A react test renderer for threejs in node.',
      },
      {
        title: '@strapi/pack-up',
        href: 'https://github.com/strapi/pack-up',
        variant: 'outlink',
        description:
          'Simple tools for creating interoperable CJS & ESM packages.',
      },
    ],
  },
  {
    title: 'Experiments',
    items: [
      {
        title: 'MacOS Dock',
        href: '/experiments/macos-dock',
        description: 'November 2022',
      },
      {
        title: 'Theme Toggle',
        description: 'September 2022',
        href: '/experiments/theme-toggle',
      },
    ],
  },
]

interface Writing {
  title: string
  description: string
}

interface WritingWithLink extends Writing {
  comingSoon?: never
  href: string
  date: string
}

interface WritingComingSoon extends Writing {
  comingSoon: boolean
  href?: never
  date?: never
}

const WRITING: Array<WritingWithLink | WritingComingSoon> = [
  {
    title: 'Critical thinking in engineering',
    description:
      "It's not just about fixing the issue, but understanding why it broke in the first place.",
    // href: '/writing/critical-thinking-in-engineering',
    // date: 'Aug 2024',
    comingSoon: true,
  },
]

const HomePage = () => {
  return (
    <Provider>
      <Box
        as="main"
        css={{
          px: '$40',
          maxWidth: '$type',
          margin: '0 auto',
          mt: '$40',
          mb: '$60',

          '@tabletUp': {
            mt: '$80',
            mb: '$120',
          },
        }}
      >
        <NextSeo title="Josh Ellis" titleTemplate="%s" />
        <Flex
          css={{
            gap: '$20',
            mb: '$20',

            '@tabletUp': {
              mb: '$40',
            },
          }}
        >
          <Avatar.Root asChild>
            <Flex
              css={{
                borderRadius: '$round',
                overflow: 'hidden',
                height: 50,
                width: 50,
              }}
            >
              <AvatarImage src="https://avatars.githubusercontent.com/u/37798644?v=4" />
              <AvatarFallback>
                <span>Josh Picture</span>
              </AvatarFallback>
            </Flex>
          </Avatar.Root>
          <Heading tag="h1" fontStyle="$M">
            Josh 🤷🏻‍♀️
          </Heading>
        </Flex>
        <article>
          <section>
            <Copy
              fontStyle="$S"
              css={{
                mb: '$20',

                '@tabletUp': {
                  mb: '$40',
                },
              }}
            >
              <Balancer ratio={BALANCE_RATIO}>
                creating free open-source libraries for communities. crafting
                software that brings users joy. special interests in
                design-systems, components APIs and composable architectures.
              </Balancer>
            </Copy>
            <Copy
              fontStyle="$S"
              css={{
                mb: '$20',

                '@tabletUp': {
                  mb: '$40',
                },
              }}
            >
              <Balancer ratio={BALANCE_RATIO}>
                currently engineering at{' '}
                <Anchor variant="headline" href="https://sanity.io">
                  sanity
                </Anchor>
                . previously at{' '}
                <Anchor variant="headline" href="https://strapi.io">
                  strapi
                </Anchor>
                ,{' '}
                <Anchor variant="headline" href="https://companion.studio">
                  companion
                </Anchor>
                ,{' '}
                <Anchor variant="headline" href="https://sennep.com">
                  sennep
                </Anchor>{' '}
                &{' '}
                <Anchor variant="headline" href="https://applied.works">
                  applied works
                </Anchor>
                .
              </Balancer>
            </Copy>
          </section>
          <Section
            as="section"
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '$40',

              '@tabletUp': {
                flexDirection: 'row',
                alignItems: 'flex-start',
              },
            }}
          >
            {MID_SECTION.map((section, index) => (
              <Flex
                css={{
                  width: '100%',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  flex: '1',

                  '@tabletUp': {
                    width: 'unset',
                    flex: 0,
                    flexBasis: '40%',
                  },
                }}
                key={index}
              >
                <SectionHeader>{section.title}</SectionHeader>
                <Flex
                  as="dl"
                  css={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    m: 0,
                    mt: '$15',
                    gap: '$10',
                  }}
                >
                  {section.items.map((item, index) => (
                    <Flex
                      css={{
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                      }}
                      key={index}
                    >
                      <Heading fontStyle="$XS" tag="dt">
                        {item.href ? (
                          <Anchor variant={item.variant} href={item.href}>
                            {item.title}
                          </Anchor>
                        ) : (
                          item.title
                        )}
                      </Heading>
                      <Copy
                        css={{
                          opacity: 0.6,
                        }}
                        fontStyle="$XS"
                        tag="dd"
                      >
                        {item.description}
                      </Copy>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Section>
          <Section as="section">
            <SectionHeader>Writing</SectionHeader>
            <Flex
              as="ul"
              css={{
                flexDirection: 'column',
                m: 0,
                p: 0,
                listStyle: 'none',
                mt: '$15',
                gap: '$30',

                '@tabletUp': {
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: '$20',
                  justifyContent: 'flex-start',

                  '& > li': {
                    flex: '0 0 calc(33% - 11px)',
                  },
                },
              }}
            >
              {WRITING.map((item) => {
                const component = (
                  <WritingCard isComingSoon={Boolean(item.comingSoon)}>
                    <WritingBackground />
                    <Heading tag="h3" fontStyle="$XS">
                      {item.title}
                    </Heading>
                    <Copy fontStyle="$XXS" css={{ opacity: 0.8 }}>
                      {item.description}
                    </Copy>
                    <Copy tag="span" fontStyle="$XXS" css={{ opacity: 0.6 }}>
                      {item.date ?? 'Coming Soon'}
                    </Copy>
                  </WritingCard>
                )

                return item.href ? (
                  <li key={item.title}>
                    <Link href={item.href}>{component}</Link>
                  </li>
                ) : (
                  <li key={item.title}>{component}</li>
                )
              })}
            </Flex>
          </Section>
          <Section as="section">
            <SectionHeader>Connect</SectionHeader>
            <Copy css={{ mt: '$15' }}>
              <Balancer ratio={0.4}>
                Reach me at{' '}
                <Anchor href="https://twitter.com/_josh_ellis_">
                  @_josh_ellis_
                </Anchor>{' '}
                or <Anchor href="mailto:joshua.ellis18@gmail.com">email</Anchor>
                . Alternatively, take a closer look at my work{' '}
                <Anchor href="https://github.com/joshuaellis">
                  @joshuaellis
                </Anchor>
              </Balancer>
            </Copy>
          </Section>
        </article>
      </Box>
    </Provider>
  )
}

export default HomePage

const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
})

const AvatarFallback = styled(Avatar.Fallback, {
  backgroundColor: '$blue',
  width: '100%',
  height: '100%',

  '& > span': {
    visuallyHidden: '',
  },
})

const Section = styled(Box, {
  mt: '$40',

  '@tabletUp': {
    mt: '$80',
  },
})

const SectionHeader: FC<{ children: ReactNode }> = ({ children }) => (
  <Heading
    tag="h2"
    css={{
      opacity: 0.6,
    }}
    fontStyle="$XXS"
  >
    {children}
  </Heading>
)

const WritingBackground = styled('span', {
  display: 'block',
  position: 'absolute',
  inset: -10,
  opacity: 0,
  zIndex: 0,
  background: '$blueGreenGradient40',
  borderRadius: '$r8',

  '@motion': {
    transition: 'opacity 250ms ease-out',
  },
})

const WritingCard = styled(Flex, {
  flexDirection: 'column',
  gap: '$5',
  alignItems: 'flex-start',
  position: 'relative',

  variants: {
    isComingSoon: {
      false: {
        hover: {
          [`& ${WritingBackground}`]: {
            opacity: 0.6,
          },
        },
      },
    },
  },
})
