import React, { useRef } from 'react'
import { useTweaks, makeSeparator } from 'use-tweaks'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()

export default function BoxGrid ({ gridSize = [96, 72] }) {
  const [gridSizeX, gridSizeY] = gridSize
  const TOTAL_BOXES = gridSizeX * gridSizeY
  const meshRef = useRef()

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
    frequency: { value: 0.7, min: 0, max: 1 },
    amplitude: { value: 0.17, min: 0, max: 2 },
    crest: { value: 0.45, min: 0, max: 1 },
    speed: { value: 4.1, min: 1, max: 20 },
    dampen: { value: 1.1, min: 0, max: 1.2 },
    ...makeSeparator(),
    hue: { value: 234, min: 0, max: 360 },
    saturation: { value: 100, min: 0, max: 100 },
    colorIntensity: { value: 1.04, min: 1, max: 5 }
  })

  const cx = gridSizeX / 2
  const cy = gridSizeY / 2

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    let totalCount = 0

    for (let x = 0; x < gridSizeX; x++) {
      for (let y = 0; y < gridSizeY; y++) {
        const id = totalCount++
        // const posZ = waveNoise(posX + Math.sin(time), posY)

        const vel = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2))

        const l =
          amplitude *
            Math.pow(Math.E, (-dampen / 10) * vel) *
            Math.cos((vel - time * speed) * frequency + Math.PI) +
          1 -
          crest

        tempObject.position.set(x, y, (1 - l) * 20)

        tempObject.updateMatrix()

        meshRef.current.setMatrixAt(id, tempObject.matrix)

        meshRef.current.setColorAt(
          id,
          tempColor.setHSL(
            hue / 360,
            saturation / 100,
            l <= dampen / 2 ? l / colorIntensity : 1
          )
        )
      }
    }

    meshRef.current.instanceColor.needsUpdate = true
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
        <meshStandardMaterial attach='material' />
      </instancedMesh>
    </group>
  )
}
