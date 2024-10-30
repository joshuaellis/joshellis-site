import { type ReactNode } from 'react'
import { NextSeo, type NextSeoProps } from 'next-seo'
import Link from 'next/link'
import { CodeIcon, DoubleArrowLeftIcon, Link2Icon } from '@radix-ui/react-icons'

import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { Copy } from 'components/Text/Copy'
import { Heading, type HeadingProps } from 'components/Text/Heading'
import { IconButton } from 'components/IconButton'
import { sharedLinkStyles } from 'components/Text/Anchor'

import { capitalize, generateExperimentUrl } from 'helpers/strings'
import { merge } from 'helpers/object'

import type { CSS } from 'styles/stitches.config'

interface RootProps {
  children: ReactNode
  seo?: NextSeoProps
}

const Root = ({ children, seo }: RootProps) => (
  <>
    <NextSeo {...seo} />
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
          <Copy tag={Flex} fontStyle="$XXS" css={{ gap: '$10', opacity: 0.6 }}>
            <DoubleArrowLeftIcon />
            <Box as="span" css={{ position: 'relative', bottom: 1 }}>
              home
            </Box>
          </Copy>
        </Link>
      </Box>
      {children}
    </Box>
  </>
)

interface MainProps {
  children: ReactNode
  css?: CSS
}

const Main = ({ children, css = {} }: MainProps) => (
  <Box
    as="main"
    css={merge(
      {
        gridRow: '3 / 4',
        gridColumn: '1 / 2',
        border: '1px solid rgba(250,250,250,0.2)',
        borderRadius: '$r8',
        backgroundColor: 'rgba(0,0,0,0.2)',
        overflow: 'hidden',

        '@tabletUp': {
          gridColumn: '2 / 3',
          gridRow: '2 / 3',
        },
      },
      css
    )}
  >
    {children}
  </Box>
)

interface HeaderProps {
  children: ReactNode
  experimentName: string
}

const Header = ({ children, experimentName }: HeaderProps) => {
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Flex
      as="header"
      css={{
        gridRow: '2 / 3',
        gridColumn: '1 / 2',
        width: '100%',
        justifyContent: 'space-between',

        '@tabletUp': {
          gridColumn: '2 / 3',
          gridRow: '1 / 2',
        },
      }}
    >
      <Flex css={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        {children}
      </Flex>
      <Flex css={{ gap: '$10' }}>
        <IconButton
          // @ts-expect-errors cba to resolve this... sorry me.
          as={Link}
          href={generateExperimentUrl(experimentName)}
          label="View code"
          withToolip
        >
          <CodeIcon width={20} height={20} />
        </IconButton>
        <IconButton onClick={handleClick} label="Copy URL" withToolip>
          <Link2Icon width={20} height={20} />
        </IconButton>
      </Flex>
    </Flex>
  )
}

const HeaderTitle = (props: HeadingProps) => (
  <Heading {...props} tag="h1" fontStyle="$M" />
)

const HeaderSubtitle = (props: HeadingProps) => (
  <Heading {...props} tag="h2" fontStyle="$XXS" css={{ opacity: 0.6 }} />
)

interface FooterProps {
  children: ReactNode
}

const Footer = ({ children }: FooterProps) => (
  <Box
    as="footer"
    css={{
      gridRow: '4 / 5',
      gridColumn: '1 / 2',
      mt: '$20',

      '@tabletUp': { mt: '$40', gridColumn: '2 / 3', gridRow: '3 / 4' },
    }}
  >
    <Box
      as="div"
      aria-hidden
      css={{
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(250,250,250,0.2)',
      }}
    />
    <Flex
      css={{
        justifyContent: 'flex-end',
        width: '100%',
        mt: '$20',
        '@tabletUp': { mt: '$40' },
      }}
    >
      <Flex css={{ justifyContent: 'space-between', width: '100%' }}>
        {children}
      </Flex>
    </Flex>
  </Box>
)

interface FooterLinkProps {
  children: string
  href: string
  type: 'next' | 'previous'
}

const {
  hover: { textDecorationColor },
  ...restLinkStyles
} = sharedLinkStyles

const FooterLink = ({ children, href, type }: FooterLinkProps) => {
  return (
    <Flex
      as={Link}
      href={href}
      css={{
        flexDirection: 'column',
        alignItems: type === 'next' ? 'flex-end' : 'flex-start',

        hover: {
          '& > span': {
            textDecorationColor,
          },
        },
      }}
    >
      <Copy
        tag="span"
        fontStyle="$XXS"
        css={{
          opacity: 0.6,
        }}
      >
        {capitalize(type)}
      </Copy>
      <Copy tag="span" fontStyle="$XXS" css={{ ...restLinkStyles }}>
        {children}
      </Copy>
    </Flex>
  )
}

export { Root, Header, HeaderTitle, HeaderSubtitle, Main, Footer, FooterLink }

export type { RootProps, HeaderProps, MainProps, FooterProps, FooterLinkProps }
