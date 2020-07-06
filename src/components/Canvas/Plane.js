import React, { useMemo, useRef } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import * as THREE from 'THREE'

import vertex from './shaders/vert'
import fragment from './shaders/frag'

const ALPHA = 'alpha'
const UPPER_LIMIT = 'upperLimit'
const LOWER_LIMIT = 'lowerLimit'

export default function CanvasPlane () {
  const { viewport, clock } = useThree()
  const { innerWidth: width, innerHeight: height } = window
  const shaderRef = useRef()

  const uniforms = useMemo(() => ({
    timestamp: { value: 1.0 },
    resolution: {
      value: new THREE.Vector2(width, height)
    },
    [ALPHA]: { value: 1.0 },
    [LOWER_LIMIT]: { value: Math.PI / 4 },
    [UPPER_LIMIT]: { value: (Math.PI * 3) / 4 }
  }))

  useFrame(() => {
    const { current: shader } = shaderRef
    shader.uniforms.timestamp = { value: clock.elapsedTime }
  })

  return (
    <mesh visible>
      <planeGeometry
        attach='geometry'
        args={[viewport.width, viewport.height]}
      />
      <shaderMaterial
        ref={shaderRef}
        attach='material'
        uniforms={{ ...uniforms }}
        fragmentShader={fragment}
        vertexShader={vertex}
      />
    </mesh>
  )
}
