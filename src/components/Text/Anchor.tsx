import { ReactNode } from 'react'
import Link from 'next/link'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

import { isValidHttpUrl } from 'helpers/strings'

import { CSS, styled } from 'styles/stitches.config'
import { merge } from 'helpers/object'

export interface AnchorProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  variant?: 'regular' | 'outlink' | 'headline'
  css?: CSS
}

export const Anchor = ({
  href,
  children,
  className,
  onClick,
  variant = 'regular',
  css,
}: AnchorProps) => {
  const isExternal = isValidHttpUrl(href)

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  if (isExternal) {
    return (
      <AnchorElement
        className={className}
        as="a"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        onClick={handleClick}
        variant={variant}
        css={css}
      >
        {children}
        {variant === 'outlink' && <ExternalLinkIcon width={16} />}
      </AnchorElement>
    )
  } else {
    return (
      <AnchorElement
        variant={variant}
        onClick={handleClick}
        href={href}
        css={css}
      >
        {children}
      </AnchorElement>
    )
  }
}

export const sharedLinkStyles = {
  textDecoration: 'underline',
  textDecorationThickness: 1,
  textUnderlineOffset: 2.5,
  textDecorationColor: 'rgba(250,250,250,0.4)',

  '@motion': {
    transition: 'all 200ms ease-out',
  },

  hover: {
    textDecorationColor: 'rgba(250,250,250,0.8)',
  },
}

const AnchorElement = styled(Link, {
  fontSize: 'inherit',
  lineHeight: 'inherit',
  position: 'relative',
  textDecoration: 'none',

  variants: {
    variant: {
      outlink: merge(sharedLinkStyles, {
        display: 'flex',
        alignItems: 'center',
        gap: '$5',

        '& > svg': {
          opacity: 0.4,
          transition: 'opacity 0.2s ease-in-out',
        },

        hover: {
          '& > svg': {
            opacity: 0.6,
          },
        },
      }),

      regular: sharedLinkStyles,

      headline: {
        '&:after': {
          position: 'absolute',
          left: 0,
          content: '',
          width: '100%',
          height: 2,
          bottom: -1,
          backgroundColor: '$blue',

          '@motion': {
            transition: 'all 200ms ease-out',
          },
        },

        '&:hover:after': {
          width: 0,
          left: 'unset',
          right: 0,
        },
      },
    },
  },
})
