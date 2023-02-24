import React from 'react'
import { Canvas } from '@react-three/fiber'

import HapticScene from './HapticScene'

const HapticCanvas = () => {
  return (
    <>
      <Canvas gl={{ antialias: false, alpha: false }}>
        <color attach="background" args={[0, 0, 0]} />
        <HapticScene />
      </Canvas>
    </>
  )
}

export default HapticCanvas
