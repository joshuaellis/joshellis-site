import React from 'react'
import styled from 'styled-components'
import { Canvas } from 'react-three-fiber'

import Plane from './Plane'

export default function HomeCanvas () {
  return (
    <CanvasContainer>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Plane />
      </Canvas>
    </CanvasContainer>
  )
}

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`
