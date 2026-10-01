import { Children, cloneElement, type ReactNode } from 'react'

interface AccessibleIconProps {
  children: ReactNode
  label: string
  className?: string
}

interface AccessibleIconChildProps {
  'aria-hidden': 'true'
  focusable: 'false'
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
      {cloneElement(child as React.ReactElement<AccessibleIconChildProps>, {
        'aria-hidden': 'true',
        focusable: 'false',
        className,
      })}
      <span className="visually-hidden">{label}</span>
    </>
  )
}
