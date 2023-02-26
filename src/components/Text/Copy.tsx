import { ComponentType, CSSProperties, forwardRef, ReactNode } from 'react'

import { getFontStyles } from 'styles/fontStyles'
import { styled, ScaleValue, CSS } from 'styles/stitches.config'

import { merge } from 'helpers/object'

export interface CopyProps {
  fontStyle?: ScaleValue<'fontSizes'>
  className?: string
  children?: ReactNode
  css?: CSS
  tag?:
    | keyof Pick<
        JSX.IntrinsicElements,
        'p' | 'blockquote' | 'div' | 'label' | 'dd' | 'span'
      >
    | ComponentType
  style?: CSSProperties
}

export const Copy = forwardRef<HTMLHeadingElement, CopyProps>(
  (
    { fontStyle = '$XS', className, children, css = {}, tag = 'p', style },
    ref
  ) => {
    return (
      <Text
        className={className}
        as={tag}
        ref={ref}
        css={merge(getFontStyles(fontStyle), css)}
        style={style}
      >
        {children}
      </Text>
    )
  }
)

const Text = styled('p', {
  margin: 0,
  fontWeight: '$default',
})
