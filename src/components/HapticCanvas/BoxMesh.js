import React, { useLayoutEffect, useRef } from 'react'
import { useTweaks, makeSeparator } from 'use-tweaks'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

import { distance } from 'helpers/vectors'

import { sinc } from 'helpers/math'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()

export default function BoxGrid({ gridSize = [96, 72] }) {
  const [gridSizeX, gridSizeY] = gridSize
  const TOTAL_BOXES = gridSizeX * gridSizeY
  const meshRef = useRef()

  const wavePoints = useRef(
    new Array(8).fill(0).map((_) => ({ x: 0, y: 0, z: 0, time: 0, color: 235 }))
  )

  const { amplitude, dampen, maxDist, fade, start, speed } = useTweaks('wave', {
    amplitude: { value: 6, min: 1, max: 10 },
    dampen: { value: 0.34, min: 0, max: 8 },
    maxDist: { value: 0.3, min: 0, max: 1, step: 0.001 },
    fade: { value: 3.0, min: 1, max: 10, step: 1 },
    start: { value: 0.58, min: 0, max: 1, step: 0.01 },
    speed: { value: 24, min: 1, max: 50 },
  })

  const polarCubes = React.useMemo(() => {
    let cubes = []

    for (let x = 0; x < gridSizeX; x++) {
      for (let y = 0; y < gridSizeY; y++) {
        cubes = [...cubes, { x, y }]
      }
    }

    return cubes
  }, [gridSizeX, gridSizeY])

  const createWave = (cx, cy) => {
    for (let i = 0; i < wavePoints.current.length; i++) {
      if (wavePoints.current[i].z === 0) {
        wavePoints.current[i] = {
          x: cx,
          y: cy,
          z: 1,
          time: 0,
          color: 235,
        }
        break
      }
    }
  }

  const handlePointerDown = (e) => {
    const { x, y } = polarCubes[e.instanceId]
    createWave(x, y)
  }

  useLayoutEffect(() => {
    polarCubes.forEach(({ x, y }, i) => {
      tempObject.position.set(x, y)
      tempObject.updateMatrix()

      meshRef.current.setMatrixAt(i, tempObject.matrix)
      meshRef.current.setColorAt(i, tempColor.setHSL(360, 1, 1))
    })
  }, [polarCubes])

  useFrame((_, delta) => {
    polarCubes.forEach((polarVec, i) => {
      let posZ = 0
      let hue = 235

      wavePoints.current.forEach((waveVec) => {
        if (waveVec.z === 1) {
          const dist = distance(polarVec, { x: waveVec.x, y: waveVec.y })
          const normDist = dist / maxDist
          const time = waveVec.time / fade

          /**
           * if the lerped x would return 0 then
           * we don't need to calc anything saving
           * some time and resource
           */
          if (normDist - waveVec.time * speed > 1) {
            return
          }

          if (1 - time > 0) {
            posZ +=
              sinc(
                THREE.MathUtils.lerp(
                  start - dampen,
                  0.0,
                  normDist - waveVec.time * speed
                ),
                dampen,
                Math.pow(time, 1.0 + Math.pow(normDist, 2.0)),
                amplitude
              ) *
              (1.0 - time)
          }
        }
      })

      const multiPosZ = posZ * 5

      /**
       * if the posZ is above 0 then it
       * should move, saving calc times
       */
      if (multiPosZ > 0) {
        tempObject.position.set(polarVec.x, polarVec.y, multiPosZ)
        tempObject.updateMatrix()

        meshRef.current.setMatrixAt(i, tempObject.matrix)
        meshRef.current.setColorAt(
          i,
          tempColor.setHSL(hue / 360, 1, Math.abs(1 - multiPosZ))
        )
      }
    })

    wavePoints.current.forEach((vec) => {
      const newTime = vec.time + delta
      if (1 - newTime / fade > 0) {
        // if it's not finsihed add to it
        vec.time = newTime
      } else {
        // if its finished stop the ripple
        vec.z = 0
      }
    })

    if (wavePoints.current.length > 0) {
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
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" />
      </instancedMesh>
    </group>
  )
}
