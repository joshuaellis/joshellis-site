import { NextSeo } from 'next-seo'
import * as Avatar from '@radix-ui/react-avatar'
import { styled } from 'styles/stitches.config'
import Balancer, { Provider } from 'react-wrap-balancer'

import { Flex } from 'components/Flex'
import { Box } from 'components/Box'

import { Anchor } from 'components/Text/Anchor'
import { Heading } from 'components/Text/Heading'
import { Copy } from 'components/Text/Copy'

const BALANCE_RATIO = 0.5

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

          '@tabletUp': {
            mt: '$80',
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
                <Anchor href="https://strapi.io">strapi</Anchor>. previously at{' '}
                <Anchor href="https://companion.studio">companion</Anchor>,{' '}
                <Anchor href="https://sennep.com">sennep</Anchor> &{' '}
                <Anchor href="https://applied.works">applied works</Anchor>.
              </Balancer>
            </Copy>
          </section>
          <Box
            as="section"
            css={{
              '@tabletUp': {
                display: 'flex',
                gap: '$20',
              },
            }}
          >
            <Flex
              css={{
                width: '100%',
                alignItems: 'flex-start',
                flexDirection: 'column',
                flex: '1',

                '@tabletUp': {
                  width: 'unset',
                },
              }}
            >
              <Heading tag="h2" fontStyle="$M">
                Projects
              </Heading>
              <Flex
                css={{
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <Heading tag="h3">react-spring</Heading>
                <Copy>something something</Copy>
              </Flex>
              <Flex
                css={{
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <Heading tag="h3">@react-three/fiber</Heading>
                <Copy>something something</Copy>
              </Flex>
              <Flex
                css={{
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <Heading tag="h3">@react-three/test-renderer</Heading>
                <Copy>something something</Copy>
              </Flex>
            </Flex>
            <Flex
              css={{
                width: '100%',
                alignItems: 'flex-start',
                flexDirection: 'column',
                flex: '1',

                '@tabletUp': {
                  width: 'unset',
                },
              }}
            >
              <Heading tag="h2" fontStyle="$M">
                Experiments
              </Heading>
              <Flex
                css={{
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <Heading tag="h3">MacOS Dock</Heading>
                <Copy>something something</Copy>
              </Flex>
              <Flex
                css={{
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <Heading tag="h3">Circle Wave</Heading>
                <Copy>something something</Copy>
              </Flex>
            </Flex>
          </Box>
          <section>
            <Heading tag="h2" fontStyle="$M">
              Writing
            </Heading>
          </section>
          <section>
            <Heading tag="h2" fontStyle="$M">
              Connect
            </Heading>
            <Copy>
              Reach out to me at{' '}
              <Anchor href="https://twitter.com/_josh_ellis_">
                @_josh_ellis_
              </Anchor>{' '}
              or <Anchor href="mailto:joshua.ellis18@gmail.com">email</Anchor>.
            </Copy>
            <Copy>
              Take a better look at my work{' '}
              <Anchor href="https://github.com/joshuaellis">
                @joshuaellis
              </Anchor>
            </Copy>
          </section>
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
