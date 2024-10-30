import { type CSSProperties, forwardRef, type ReactNode } from 'react'

import { getFontStyles } from 'styles/fontStyles'
import { styled, type ScaleValue, type CSS } from 'styles/stitches.config'

export interface HeadingProps {
  tag?: keyof Pick<
    JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'figcaption' | 'dt'
  >
  fontStyle?: ScaleValue<'fontSizes'>
  className?: string
  children?: ReactNode
  isLink?: boolean
  css?: CSS
  weight?: ScaleValue<'fontWeights'> | CSSProperties['fontWeight']
  style?: CSSProperties
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      tag = 'h1',
      fontStyle = '$S',
      weight = '$default',
      className,
      children,
      css,
      ...restProps
    },
    ref
  ) => {
    return (
      <HeadingElement
        className={className}
        ref={ref}
        as={tag}
        css={{
          fontWeight: weight,
          ...getFontStyles(fontStyle),
          ...css,
        }}
        {...restProps}
      >
        {children}
      </HeadingElement>
    )
  }
)

const HeadingElement = styled('h1', {
  whiteSpace: 'pre-line',
  position: 'relative',
})
