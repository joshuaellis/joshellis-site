import React from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { OrthographicCamera } from '@react-three/drei/OrthographicCamera'

import { COLORS } from 'references/styles'

import BoxGrid from './BoxGrid'

const MINIMIZER = 20

export const HapticComponent = () => {
  const {
    viewport: { height, width }
  } = useThree()

  const gridX = Math.max(Math.floor(width / MINIMIZER), 5)
  const gridY = Math.max(Math.floor(height / MINIMIZER), 5)

  return (
    <>
      <OrthographicCamera
        makeDefault
        left={-gridX}
        right={gridX}
        top={gridY}
        bottom={-gridY}
        near={-1}
        far={1}
      />
      <BoxGrid />
      <ambientLight />
      <pointLight position={[150, 150, 150]} intensity={0.55} />
    </>
  )
}

const HapticCanvas = () => (
  <Canvas
    gl={{ antialias: false, alpha: false }}
    onCreated={({ gl }) => gl.setClearColor(COLORS.white)}
    updateDefaultCamera={false}
  >
    <HapticComponent />
  </Canvas>
)

export default HapticCanvas
