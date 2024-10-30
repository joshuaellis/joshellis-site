import { type FormEventHandler, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

import { Box } from 'components/Box'
import { styled } from 'styles/stitches.config'

import { AccessibleIcon } from './AccessibleIcon'

export enum ThemeValue {
  Dark = 'dark',
  Light = 'light',
}

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(ThemeValue.Light)

  const [styles, api] = useSpring(
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
    <ThemeGroup as="fieldset" onChange={handleValueChange}>
      <ThemePicker
        as="label"
        onPointerEnter={handlePointerEnter(ThemeValue.Light)}
        onPointerOut={handlePointerOut(ThemeValue.Light)}
      >
        <Box
          as="input"
          value="light"
          type="radio"
          name="theme"
          css={{ visuallyHidden: '' }}
        />
        <AccessibleIcon label="Enable light mode">
          <SunIcon width={20} height={20} />
        </AccessibleIcon>
      </ThemePicker>
      <ThemePicker
        as="label"
        onPointerEnter={handlePointerEnter(ThemeValue.Dark)}
        onPointerOut={handlePointerOut(ThemeValue.Dark)}
      >
        <Box
          as="input"
          value="dark"
          type="radio"
          name="theme"
          css={{ visuallyHidden: '' }}
        />
        <AccessibleIcon label="Enable dark mode">
          <MoonIcon width={20} height={20} />
        </AccessibleIcon>
      </ThemePicker>
      <ThemeActiveBlob style={styles} />
    </ThemeGroup>
  )
}

const ThemeGroup = styled(Box, {
  m: 0,
  p: 0,
  border: 'none',
  height: '4.6rem',
  width: '9.2rem',
  position: 'relative',
  backgroundColor: '#2b2b37',
  borderRadius: '$r8',
  zIndex: 0,
})

const ThemePicker = styled(Box, {
  background: 'transparent',
  border: 'none',
  width: '50%',
  height: '100%',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$r8',
  p: 2,
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,

  svg: {
    pointerEvents: 'none',
  },
})

const ThemeActiveBlob = styled(animated.div, {
  height: 42,
  backgroundColor: '$black',
  position: 'absolute',
  zIndex: 0,
  top: 2,
  borderRadius: '$r8',
  transition: 'left 400ms ease-out, right 400ms ease-out',
})
