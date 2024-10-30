import {
  Children,
  cloneElement,
  type ComponentPropsWithoutRef,
  type ComponentType,
  useState,
} from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useTransition, animated } from '@react-spring/web'

import { Box } from './Box'
import { Button } from './Button'
import { Copy } from './Text/Copy'

interface IconButtonProps extends ComponentPropsWithoutRef<typeof Button> {
  label: string
  withToolip?: boolean
  as?: string | ComponentType
}

const AnimatedCopy = animated(Copy)

export const IconButton = ({
  label,
  children,
  withToolip = false,
  ...props
}: IconButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const child = Children.only(children)

  const component = (
    <Button {...props}>
      {cloneElement(child as React.ReactElement, {
        // accessibility
        'aria-hidden': 'true',
        focusable: 'false', // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable
      })}
      <Box as="span" css={{ visuallyHidden: '' }}>
        {label}
      </Box>
    </Button>
  )

  const handleOpenChange = (isOpen: boolean) => setIsOpen(isOpen)

  const transition = useTransition(isOpen, {
    from: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
    config: {
      tension: 240,
    },
  })

  if (!withToolip) {
    return component
  } else {
    return (
      <Tooltip.Provider>
        <Tooltip.Root
          delayDuration={400}
          open={isOpen}
          onOpenChange={handleOpenChange}
        >
          <Tooltip.Trigger asChild>{component}</Tooltip.Trigger>
          <Tooltip.Portal forceMount>
            {transition((style, item) =>
              item ? (
                <Tooltip.Content sideOffset={10} forceMount asChild>
                  <div>
                    <AnimatedCopy
                      tag="span"
                      fontStyle="$XXS"
                      css={{
                        padding: '$5 $10',
                        backgroundColor: 'rgba(28, 28, 28, 0.2)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '$r8',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                      style={style}
                    >
                      {label}
                    </AnimatedCopy>
                  </div>
                </Tooltip.Content>
              ) : null
            )}
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    )
  }
}
