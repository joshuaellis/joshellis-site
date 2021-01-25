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
    hue,
    saturation,
    dampen,
    colorIntensity,
    lerpAmount
  } = useTweaks('wave', {
    frequency: { value: 1.47, min: 0, max: 5 },
    amplitude: { value: 0.61, min: 0, max: 2 },
    crest: { value: 0.42, min: 0, max: 1 },
    dampen: { value: 2.43, min: 0, max: 8 },
    lerpAmount: { value: 0.06, min: 0, max: 0.1 },
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
    waves.current = polarCubes.map(cube => {
      return {
        ...cube,
        lifeLength: 0,
        vel: Math.sqrt(Math.pow(cube.x - cx, 2) + Math.pow(cube.y - cy, 2))
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

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime

    waves.current.forEach(({ x, vel: prevVel, y, id }, i) => {
      const vel = THREE.MathUtils.lerp(prevVel, 0, lerpAmount)

      if (vel < 0.1) {
        waves.current[i].vel = 0
        return
      }

      if ((x === 0) & (y === 0)) {
        console.log(vel)
      }

      const newL =
        amplitude *
          Math.pow(Math.E, (-dampen / 10) * vel) *
          Math.cos(vel * frequency - Math.PI / 4) +
        1 -
        crest

      const l = THREE.MathUtils.lerp(newL, 0, 0.001)

      const isOverLimit = l <= 0.56

      const posZ = isOverLimit ? l : 0.5

      tempObject.position.set(x, y, (1.2 - posZ) * 5)

      tempObject.updateMatrix()

      meshRef.current.setMatrixAt(id, tempObject.matrix)

      meshRef.current.setColorAt(
        id,
        tempColor.setHSL(
          hue / 360,
          saturation / 100,
          isOverLimit ? l / colorIntensity : 1
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
