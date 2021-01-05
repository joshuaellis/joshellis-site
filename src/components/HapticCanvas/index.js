import React from 'react'
import { Canvas } from 'react-three-fiber'
import { Stats } from '@react-three/drei'

import { ENV } from 'env'

import { COLORS } from 'references/styles'

import HapticScene from './HapticScene'

const HapticCanvas = () => {
  return (
    <>
      <Canvas
        gl={{ antialias: false, alpha: false }}
        onCreated={({ gl }) => gl.setClearColor(COLORS.white)}
        updateDefaultCamera={false}
      >
        {ENV !== 'production' && <Stats showPanel={0} />}
        <HapticScene />
      </Canvas>
    </>
  )
}

export default HapticCanvas
