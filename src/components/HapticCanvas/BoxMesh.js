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
    speed,
    crest,
    hue,
    saturation,
    dampen,
    colorIntensity
  } = useTweaks('wave', {
    frequency: { value: 0.89, min: 0, max: 1 },
    amplitude: { value: 0.48, min: 0, max: 2 },
    crest: { value: 0.42, min: 0, max: 1 },
    speed: { value: 5.9, min: 1, max: 20 },
    dampen: { value: 1.43, min: 0, max: 2 },
    ...makeSeparator(),
    hue: { value: 234, min: 0, max: 360 },
    saturation: { value: 100, min: 0, max: 100 },
    colorIntensity: { value: 1.04, min: 1, max: 5 }
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
    waves.current = [
      polarCubes.map(cube => ({
        ...cube,
        vel: Math.sqrt(Math.pow(cube.x - cx, 2) + Math.pow(cube.y - cy, 2))
      }))
    ]
  }

  const handlePointerDown = e => {
    const { x, y } = polarCubes[e.instanceId]
    createWave(x, y)
  }

  useLayoutEffect(() => {
    polarCubes.forEach(({ x, y, id }) => {
      tempObject.position.set(x, y, 0)

      tempObject.updateMatrix()

      meshRef.current.setMatrixAt(id, tempObject.matrix)

      meshRef.current.setColorAt(id, tempColor.setHSL(360, 1, 1))
    })
  }, [])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    waves.current.forEach(cubes => {
      cubes.forEach(({ x, vel, y, id }) => {
        const l =
          amplitude *
            Math.pow(Math.E, (-dampen / 10) * vel) *
            Math.cos((vel - time * speed) * frequency + Math.PI) +
          1 -
          crest

        const isPastLimit = l <= 0.56

        const posZ = isPastLimit ? l : 0.5

        tempObject.position.set(x, y, posZ * 5)

        tempObject.updateMatrix()

        meshRef.current.setMatrixAt(id, tempObject.matrix)

        meshRef.current.setColorAt(
          id,
          tempColor.setHSL(
            hue / 360,
            saturation / 100,
            isPastLimit ? l / colorIntensity : 1
          )
        )
      })
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
