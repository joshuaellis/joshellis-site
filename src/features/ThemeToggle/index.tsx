import { type FormEventHandler, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

import { AccessibleIcon } from './AccessibleIcon'

import styles from './ThemeToggle.module.css'

export enum ThemeValue {
  Dark = 'dark',
  Light = 'light',
}

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(ThemeValue.Light)

  const [blobStyles, api] = useSpring(
    () => ({
      width: 42,
      left: theme === 'light' ? '2px' : 'unset',
      right: theme === 'light' ? 'unset' : '2px',
      config: {
        tension: 300,
        clamp: true,
      },
    }),
    []
  )

  const handleValueChange: FormEventHandler<HTMLFieldSetElement> = async (
    e
  ) => {
    const value = (e.target as HTMLInputElement).value

    if (value && value !== theme) {
      setTheme(value as ThemeValue)

      api.start({
        to: async (animate) => {
          await animate({ width: 88 })
          api.set({
            left: value === 'light' ? '2px' : 'unset',
            right: value === 'light' ? 'unset' : '2px',
          })
          await animate({ width: 42 })
        },
      })
    }
  }

  const handlePointerEnter = (value: ThemeValue) => () => {
    if (theme !== value) {
      api.start({
        width: 52,
      })
    }
  }

  const handlePointerOut = (value: ThemeValue) => () => {
    if (theme !== value) {
      api.start({
        width: 42,
      })
    }
  }

  return (
    <fieldset className={styles.group} onChange={handleValueChange}>
      <label
        className={styles.picker}
        onPointerEnter={handlePointerEnter(ThemeValue.Light)}
        onPointerOut={handlePointerOut(ThemeValue.Light)}
      >
        <input
          className="visually-hidden"
          value="light"
          type="radio"
          name="theme"
        />
        <AccessibleIcon label="Enable light mode">
          <SunIcon width={20} height={20} />
        </AccessibleIcon>
      </label>
      <label
        className={styles.picker}
        onPointerEnter={handlePointerEnter(ThemeValue.Dark)}
        onPointerOut={handlePointerOut(ThemeValue.Dark)}
      >
        <input
          className="visually-hidden"
          value="dark"
          type="radio"
          name="theme"
        />
        <AccessibleIcon label="Enable dark mode">
          <MoonIcon width={20} height={20} />
        </AccessibleIcon>
      </label>
      <animated.div className={styles.blob} style={blobStyles} />
    </fieldset>
  )
}
