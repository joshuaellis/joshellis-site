import React, { useLayoutEffect, useRef } from 'react'
import { useTweaks, makeSeparator } from 'use-tweaks'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()

export default function BoxGrid ({ gridSize = [96, 72] }) {
  const [gridSizeX, gridSizeY] = gridSize
  const TOTAL_BOXES = gridSizeX * gridSizeY
  const meshRef = useRef()

  const waves = useRef([])

  const {
    amplitude,
    frequency,
    crest,
    saturation,
    dampen,
    lerpAmount,
    lLimit,
    colorIntensity
  } = useTweaks('wave', {
    frequency: { value: 1.52, min: 0, max: 5 },
    amplitude: { value: 0.52, min: 0, max: 2 },
    crest: { value: 0.3, min: 0, max: 1 },
    dampen: { value: 1.3, min: 0, max: 8 },
    lerpAmount: { value: 0.08, min: 0, max: 0.1 },
    lLimit: { value: 0.61, min: 0, max: 1 },
    ...makeSeparator(),
    saturation: { value: 100, min: 0, max: 100 },
    colorIntensity: { value: 0.98, min: 0, max: 2 }
  })

  const polarCubes = React.useMemo(() => {
    let cubes = []
    let totalCount = 0

    for (let x = 0; x < gridSizeX; x++) {
      for (let y = 0; y < gridSizeY; y++) {
        const id = totalCount++
        cubes = [...cubes, { x, y, id }]
      }
    }

    return cubes
  }, [])

  const createWave = (cx, cy) => {
    const hue = Math.random()
    waves.current = polarCubes.map(cube => {
      return {
        ...cube,
        lifeLength: 0,
        vel: Math.sqrt(Math.pow(cube.x - cx, 2) + Math.pow(cube.y - cy, 2)) * 5,
        col: hue
      }
    })
  }

  const handlePointerDown = e => {
    const { x, y } = polarCubes[e.instanceId]
    createWave(x, y)
  }

  useLayoutEffect(() => {
    polarCubes.forEach(({ x, y, id }) => {
      tempObject.position.set(x, y)

      tempObject.updateMatrix()

      meshRef.current.setMatrixAt(id, tempObject.matrix)

      meshRef.current.setColorAt(id, tempColor.setHSL(360, 1, 1))
    })
  }, [])

  useFrame(() => {
    waves.current.forEach(({ x, vel: prevVel, y, id, col }, i) => {
      const vel = THREE.MathUtils.lerp(prevVel, 0, lerpAmount)

      if (vel < 0.1) {
        waves.current[i].vel = 0
      }

      const l =
        amplitude *
          Math.pow(Math.E, (-dampen / 10) * vel) *
          Math.cos(vel * frequency - Math.PI / 4) +
        1 -
        crest

      const isOverLimit = l >= lLimit
      const posZ = isOverLimit ? 0.5 : l

      tempObject.position.set(x, y, posZ * -5 - 3)

      tempObject.updateMatrix()

      meshRef.current.setMatrixAt(id, tempObject.matrix)

      meshRef.current.setColorAt(
        id,
        tempColor.setHSL(
          col,
          saturation / 100,
          isOverLimit ? 1 : l * colorIntensity
        )
      )
      waves.current[i].vel = vel
    })

    if (waves.current.length > 0) {
      meshRef.current.instanceColor.needsUpdate = true
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <group position={[-gridSizeX / 2, -gridSizeY / 2, 0]}>
      <instancedMesh
        ref={meshRef}
        args={[null, null, TOTAL_BOXES]}
        onPointerDown={handlePointerDown}
      >
        <boxBufferGeometry
          attach='geometry'
          args={[1, 1, 1]}
          position={[0, 0, 0]}
        />
        <meshStandardMaterial attach='material' />
      </instancedMesh>
    </group>
  )
}
