import { MDXProvider } from '@mdx-js/react'
import { ReactNode } from 'react'

import { Heading, HeadingProps } from '../components/Text/Heading'
import { Copy, CopyProps } from '../components/Text/Copy'
import Link from 'next/link'
import { Flex } from '../components/Flex'
import { DoubleArrowLeftIcon } from '@radix-ui/react-icons'
import { Box } from '../components/Box'
import { NextSeo, NextSeoProps } from 'next-seo'
import { Anchor } from '../components/Text/Anchor'

const comps = {
  h1: (props: HeadingProps) => (
    <Heading
      tag="h1"
      fontStyle="$XL"
      isLink
      css={{
        marginBottom: '$20',

        '@tabletUp': {
          marginBottom: '$30',
        },
      }}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => {
    return (
      <Heading
        tag="h2"
        fontStyle="$L"
        isLink
        css={{
          marginTop: '$30',
          marginBottom: '$15',

          '@tabletUp': {
            marginTop: '$40',
            marginBottom: '$20',
          },
        }}
        {...props}
      />
    )
  },
  h3: (props: HeadingProps) => (
    <Heading
      tag="h3"
      fontStyle="$M"
      isLink
      css={{
        marginTop: '$30',
        marginBottom: '$15',

        '@tabletUp': {
          marginTop: '$40',
          marginBottom: '$20',
        },
      }}
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <Heading
      tag="h4"
      fontStyle="$S"
      css={{
        marginTop: '$30',
        marginBottom: '$15',

        '@tabletUp': {
          marginTop: '$40',
          marginBottom: '$20',
        },
      }}
      {...props}
    />
  ),
  h5: (props: HeadingProps) => (
    <Heading
      tag="h5"
      fontStyle="$XS"
      css={{
        marginTop: '$30',
        marginBottom: '0.4rem',
        textTransform: 'uppercase',

        '@tabletUp': {
          marginTop: '$40',
          marginBottom: '0.6rem',
        },
      }}
      {...props}
    />
  ),
  h6: () => null,
  p: (props: CopyProps) => (
    <Copy
      css={{
        '& + &': {
          marginTop: '$15',
        },

        'pre + &': {
          marginTop: '$30',
        },

        '& > a': {
          position: 'relative',
          textDecoration: 'none',
        },
      }}
      {...props}
    />
  ),
  //   ul: (props: ListProps) => <List className={list} {...props} />,
  //   ol: (props: ListProps) => <List tag="ol" className={list} {...props} />,
  // @ts-expect-error – TS issue.
  a: (props: object) => <Anchor {...props} />,
  blockquote: (props: object) => (
    <Box
      as="blockquote"
      css={{
        my: '$30',
        position: 'relative',
        marginLeft: '$20',
        opacity: 0.7,

        '&:before': {
          content: '""',
          height: '100%',
          width: 1,
          backgroundColor: '$white',
          position: 'absolute',
          top: 0,
          left: -20,
        },
      }}
      {...props}
    />
  ),
}

export const WritingLayout = ({
  children,
  seo,
}: {
  children: ReactNode
  seo?: NextSeoProps
}) => {
  return (
    <>
      <NextSeo {...seo} />
      <MDXProvider components={comps}>
        <Box
          css={{
            display: 'grid',
            gridRowGap: '$20',
            gridColumnGap: '$10',
            px: '$40',
            mt: '$40',
            mb: '$60',
            gridTemplateRows: 'auto auto 1fr auto',
            gridTemplateColumns: '1fr',

            '@tabletUp': {
              maxWidth: '$document',
              m: '0 auto',
              gridTemplateColumns: '1fr 4fr 1fr',
              gridTemplateRows: 'auto 1fr auto',
              gridRowGap: '$40',
              gridColumnGap: '$20',
              mt: '$80',
              mb: '$120',
            },
          }}
        >
          <Box
            as="aside"
            css={{
              gridRow: '1 / 2',
              gridColumn: '1 / 2',

              '@tabletUp': {
                gridColumn: '1 / 2',
                gridRow: '1 / 4',
              },
            }}
          >
            <Link href="/">
              <Copy
                tag={Flex}
                fontStyle="$XXS"
                css={{ gap: '$10', opacity: 0.6 }}
              >
                <DoubleArrowLeftIcon />
                <Box as="span" css={{ position: 'relative', bottom: 1 }}>
                  home
                </Box>
              </Copy>
            </Link>
          </Box>
          <Box as="article" css={{ maxWidth: 680 }}>
            {children}
          </Box>
        </Box>
      </MDXProvider>
    </>
  )
}
