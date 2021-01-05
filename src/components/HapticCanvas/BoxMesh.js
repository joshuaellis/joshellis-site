import React, { useMemo, useCallback, useRef } from 'react'
import { useTweaks } from 'use-tweaks'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

import waveNoiseGenerator from 'helpers/waveNoise'

const tempObject = new THREE.Object3D()
const color = new THREE.Color()

const normalize = (min, max) => val => (val - min) / (max - min)

export default function BoxGrid ({ gridSize = [96, 72] }) {
  const [gridSizeX, gridSizeY] = gridSize
  const TOTAL_BOXES = gridSizeX * gridSizeY
  const meshRef = useRef()
  const editor = 1

  // const { amplitude, frequency, length, speed, waveMultiplier } = useTweaks(
  //   'wave',
  //   {
  //     amplitude: { value: 0.5, min: 0, max: 2 },
  //     frequency: { value: 0.1, min: 0, max: 2 },
  //     length: { value: 25, min: 0, max: 80 },
  //     speed: { value: 1.2, min: 0, max: 10 },
  //     waveMultiplier: { value: 10, min: 0, max: 40 }
  //   }
  // )

  // const waveNoise = waveNoiseGenerator({
  //   waveHeight: frequency,
  //   amplitude,
  //   waveLength: length,
  //   speed,
  //   waveMultiplier
  // })

  const cx = gridSizeX / 2
  const cy = gridSizeY / 2

  const normalizeVelocity = useMemo(() => {
    const maxVal = Math.sqrt(Math.pow(cx, 2) + Math.pow(cy, 2))
    return normalize(0, maxVal)
  }, [gridSize])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    let totalCount = 0

    for (let x = 0; x < gridSizeX; x++) {
      for (let y = 0; y < gridSizeY; y++) {
        const id = totalCount++
        // const posZ = waveNoise(posX + Math.sin(time), posY)

        const vel = Math.abs(
          Math.sqrt(
            Math.pow((x - cx) * Math.sin(time), 2) +
              Math.pow((y - cy) * Math.sin(time), 2)
          )
        )

        tempObject.position.set(x, y, normalizeVelocity(vel) * 50)

        tempObject.updateMatrix()

        meshRef.current.setMatrixAt(id, tempObject.matrix)
        // meshRef.current.setColorAt(id, color.setHSL(240 / 360, 1, posZ))
      }
    }

    // meshRef.current.instanceColor.needsUpdate = true
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <group position={[-cx, -cy, 0]}>
      <instancedMesh ref={meshRef} args={[null, null, TOTAL_BOXES]}>
        <boxBufferGeometry
          attach='geometry'
          args={[1, 1, 1]}
          position={[0, 0, 0]}
        />
        <meshNormalMaterial attach='material' color='#0000ff' />
      </instancedMesh>
    </group>
  )
}
