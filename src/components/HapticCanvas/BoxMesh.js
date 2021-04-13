import React, { useLayoutEffect, useRef } from 'react'
import { useTweaks, makeSeparator } from 'use-tweaks'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

import { distance } from 'helpers/vectors'
import { convertRGBtoHSL } from 'helpers/color'
import { sinc, getRandomInt } from 'helpers/math'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()

const DEFAULT_VALUES = {
  amplitude: 6,
  dampen: 0.34,
  maxDist: 0.3,
  fade: 3.0,
  start: 0.58,
  speed: 34,
  ...makeSeparator(),
  color: { r: 0, g: 21, b: 255 },
  darkMode: false,
}

export default function BoxGrid({ gridSize = [96, 72] }) {
  const [gridSizeX, gridSizeY] = gridSize
  const TOTAL_BOXES = gridSizeX * gridSizeY
  const meshRef = useRef()

  const wavePoints = useRef(
    new Array(8).fill(0).map((_) => ({ x: 0, y: 0, z: 0, time: 0, color: 235 }))
  )

  // const { amplitude, dampen, maxDist, fade, start, speed, color } = useTweaks(
  //   'wave',
  //   {
  //     amplitude: { value: DEFAULT_VALUES.amplitude, min: 1, max: 10 },
  //     dampen: { value: DEFAULT_VALUES.dampen, min: 0, max: 8 },
  //     maxDist: { value: DEFAULT_VALUES.maxDist, min: 0, max: 1, step: 0.001 },
  //     fade: { value: DEFAULT_VALUES.fade, min: 1, max: 10, step: 1 },
  //     start: { value: DEFAULT_VALUES.start, min: 0, max: 1, step: 0.01 },
  //     speed: { value: DEFAULT_VALUES.speed, min: 1, max: 50 },
  //     ...makeSeparator(),
  //     color: DEFAULT_VALUES.color,
  //     darkMode: DEFAULT_VALUES.darkMode,
  //   }
  // )

  const polarCubes = React.useMemo(() => {
    let cubes = []

    for (let x = 0; x < gridSizeX; x++) {
      for (let y = 0; y < gridSizeY; y++) {
        cubes = [...cubes, { x, y }]
      }
    }

    return cubes
  }, [gridSizeX, gridSizeY])

  const createWave = React.useCallback(
    (cx, cy) => {
      for (let i = 0; i < wavePoints.current.length; i++) {
        if (wavePoints.current[i].z === 0) {
          wavePoints.current[i] = {
            z: 1,
            time: 0,
            points: polarCubes.map(
              (x) => distance(x, { x: cx, y: cy }) / DEFAULT_VALUES.maxDist
            ),
          }
          break
        }
      }
    },
    [/*maxDist,*/ polarCubes]
  )

  React.useEffect(() => {
    createWave(getRandomInt(0, gridSizeY), getRandomInt(0, gridSizeX))
    createWave(getRandomInt(0, gridSizeY), getRandomInt(0, gridSizeX))
    createWave(getRandomInt(0, gridSizeY), getRandomInt(0, gridSizeX))
  }, [createWave, gridSizeX, gridSizeY])

  const handlePointerDown = (e) => {
    const { x, y } = polarCubes[e.instanceId]
    // not ready for this
    // createWave(x, y)
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
      const { h: hue } = convertRGBtoHSL(DEFAULT_VALUES.color)

      wavePoints.current.forEach((waveVec) => {
        if (waveVec.z === 1) {
          const normDist = waveVec.points[i]
          const time = waveVec.time / DEFAULT_VALUES.fade

          /**
           * if the lerped x would return 0 then
           * we don't need to calc anything saving
           * some time and resource
           */
          if (normDist - waveVec.time * DEFAULT_VALUES.speed > 1) {
            return
          }

          /**
           * now lets make sure that time
           * is still valid before doing
           * another spenny calc
           */
          if (1 - time > 0) {
            posZ +=
              sinc(
                THREE.MathUtils.lerp(
                  DEFAULT_VALUES.start - DEFAULT_VALUES.dampen,
                  0.0,
                  normDist - waveVec.time * DEFAULT_VALUES.speed
                ),
                DEFAULT_VALUES.dampen,
                Math.pow(time, 1.0 + Math.pow(normDist, 2.0)),
                DEFAULT_VALUES.amplitude
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

        // need a formula for correctly "mixing" colors, could be up to 8 cols
        meshRef.current.setColorAt(
          i,
          tempColor.setHSL(hue, 1, Math.abs(1 - multiPosZ))
        )
      }
    })

    wavePoints.current.forEach((vec) => {
      const newTime = vec.time + delta
      if (1 - newTime / DEFAULT_VALUES.fade > 0) {
        // if it's not finsihed add to it
        vec.time = newTime
      } else if (vec.z === 1) {
        // if its finished stop the ripple
        vec.z = 0
        createWave(getRandomInt(0, gridSizeY), getRandomInt(0, gridSizeX))
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
