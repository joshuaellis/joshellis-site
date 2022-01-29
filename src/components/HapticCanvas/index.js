import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'

import { ENV } from 'env'

import { COLORS } from 'references/styles'

import HapticScene from './HapticScene'

const HapticCanvas = () => {
  return (
    <>
      <Canvas
        gl={{ antialias: false, alpha: false }}
        // onCreated={({ gl }) => gl.setClearColor(COLORS.white)}
      >
        {/* {ENV !== 'production' && <Stats showPanel={0} />} */}
        {/* {ENV !== 'production' && <OrbitControls />} */}
        <color attach="background" args={[0, 0, 0]} />
        <HapticScene />
      </Canvas>
    </>
  )
}

export default HapticCanvas
