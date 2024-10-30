import { Children, cloneElement, type ReactNode } from 'react'

import { Box } from 'components/Box'

interface AccessibleIconProps {
  children: ReactNode
  label: string
  className?: string
}

export const AccessibleIcon = ({
  children,
  label,
  className,
}: AccessibleIconProps) => {
  const child = Children.only(children)
  return (
    <>
      {cloneElement(child as React.ReactElement, {
        'aria-hidden': 'true',
        focusable: 'false',
        className,
      })}
      <Box as="span" css={{ visuallyHidden: '' }}>
        {label}
      </Box>
    </>
  )
}
