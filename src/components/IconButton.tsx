import { Children, cloneElement, type ReactElement, useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useTransition, animated } from '@react-spring/web'

import styles from './IconButton.module.css'

interface IconButtonProps {
  label: string
  children: ReactElement
  href?: string
  onClick?: () => void
}

interface IconButtonChildProps {
  'aria-hidden': 'true'
  focusable: 'false'
}

export const IconButton = ({
  label,
  children,
  href,
  onClick,
}: IconButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const child = Children.only(children)

  const content = (
    <>
      {cloneElement(child as ReactElement<IconButtonChildProps>, {
        // accessibility
        'aria-hidden': 'true',
        focusable: 'false', // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable
      })}
      <span className="visually-hidden">{label}</span>
    </>
  )

  const transition = useTransition(isOpen, {
    from: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
    config: {
      tension: 240,
    },
  })

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={400} open={isOpen} onOpenChange={setIsOpen}>
        <Tooltip.Trigger asChild>
          {href ? (
            <a className={styles.button} href={href}>
              {content}
            </a>
          ) : (
            <button className={styles.button} onClick={onClick}>
              {content}
            </button>
          )}
        </Tooltip.Trigger>
        <Tooltip.Portal forceMount>
          {transition((style, item) =>
            item ? (
              <Tooltip.Content sideOffset={10} forceMount asChild>
                <div>
                  <animated.span
                    className={`t-XXS ${styles.tooltip}`}
                    style={style}
                  >
                    {label}
                  </animated.span>
                </div>
              </Tooltip.Content>
            ) : null
          )}
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
