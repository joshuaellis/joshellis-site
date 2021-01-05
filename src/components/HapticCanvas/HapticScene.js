import React from 'react'
import { PerspectiveCamera } from '@react-three/drei'

import BoxMesh from './BoxMesh'

const HapticScene = () => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 50]}
        near={0.1}
        far={55}
      />
      <BoxMesh />
      <ambientLight />
      <pointLight position={[0, 0, 150]} />
    </>
  )
}

export default HapticScene
