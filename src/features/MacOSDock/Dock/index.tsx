import * as React from 'react'
import { animated, useSpringValue } from '@react-spring/web'
import { clamp } from '@react-spring/shared'

import { styled } from 'styles/stitches.config'

import { useWindowResize } from '../hooks/useWindowResize'

import { DockContext } from './DockContext'

interface DockProps {
  children: React.ReactNode
}

export const DOCK_ZOOM_LIMIT = [-100, 50]

export const Dock = ({ children }: DockProps) => {
  const [hovered, setHovered] = React.useState(false)
  const [width, setWidth] = React.useState(0)
  const isZooming = React.useRef(false)
  const dockRef = React.useRef<HTMLDivElement>(null!)

  const setIsZooming = React.useCallback((value: boolean) => {
    isZooming.current = value
    setHovered(!value)
  }, [])

  const zoomLevel = useSpringValue(1, {
    onChange: () => {
      setWidth(dockRef.current.clientWidth)
    },
  })

  useWindowResize(() => {
    setWidth(dockRef.current.clientWidth)
  })

  return (
    <DockContext.Provider value={{ hovered, setIsZooming, width, zoomLevel }}>
      <StyledDock
        ref={dockRef}
        onMouseOver={() => {
          if (!isZooming.current) {
            setHovered(true)
          }
        }}
        onMouseOut={() => {
          setHovered(false)
        }}
        style={{
          x: '-50%',
          scale: zoomLevel
            .to({
              range: [DOCK_ZOOM_LIMIT[0], 1, DOCK_ZOOM_LIMIT[1]],
              output: [2, 1, 0.5],
            })
            .to((value) => clamp(0.5, 2, value)),
        }}
      >
        {children}
      </StyledDock>
    </DockContext.Provider>
  )
}

const StyledDock = styled(animated.div, {
  position: 'absolute',
  bottom: 12,
  left: '50%',
  transform: 'translateX(-50%)',
  alignItems: 'flex-end',
  height: 58,
  display: 'flex',
  padding: 10,
  paddingBottom: 6,
  gap: 12,
  backgroundColor: 'rgba(0, 0, 0, 0.92)',
  willChange: 'contents',
  boxSizing: 'content-box',
  borderRadius: 12,
  transformOrigin: 'center bottom',
})
