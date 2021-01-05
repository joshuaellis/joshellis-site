import React from 'react'
import { PerspectiveCamera } from '@react-three/drei'

import BoxMesh from './BoxMesh'

const HapticScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} near={10} far={20} />
      <BoxMesh />
      <ambientLight />
      <pointLight position={[0, 0, 150]} />
    </>
  )
}

export default HapticScene
