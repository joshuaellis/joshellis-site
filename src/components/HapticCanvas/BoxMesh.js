import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()

export default function BoxGrid ({ gridSize = [96, 72] }) {
  const [gridSizeX, gridSizeY] = gridSize
  const TOTAL_BOXES = gridSizeX * gridSizeY
  const meshRef = useRef()

  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(TOTAL_BOXES)
          .fill()
          .flatMap(() => tempColor.set('#f2f2f2').toArray())
      ),
    [TOTAL_BOXES]
  )

  // const generateRhythm1 = (x, y, t) => Math.sin(x + t) + Math.cos(y + t)
  // const generateRhythm2 = (x, y, t) => Math.sin(x * t) * Math.sin(y * t)
  // const opacityCalc = normalize(0, 10)
  const editor = 1

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    let totalCount = 0

    for (let x = 0; x < gridSizeX; x++) {
      for (let y = 0; y < gridSizeY; y++) {
        const id = totalCount++
        const posX = x - gridSizeX / 2
        const posY = y - gridSizeY / 2
        const posZ =
          Math.sin((posX + Math.sin(time)) * 0.09) * 5 +
          Math.sin((posY + Math.cos(time)) * 0.05) * 5 -
          Math.sin(time) / 0.06

        // const opacity = opacityCalc(posZ)

        tempObject.position.set(posX, posY, posZ * -editor)

        tempObject.updateMatrix()

        meshRef.current.setMatrixAt(id, tempObject.matrix)
      }
    }

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, TOTAL_BOXES]}>
      <boxBufferGeometry
        attach='geometry'
        args={[1, 1, 1]}
        position={[0, 0, 0]}
      >
        <instancedBufferAttribute
          attachObject={['attributes', 'color']}
          count={colorArray / 3}
          array={colorArray}
          itemSize={3}
        />
      </boxBufferGeometry>
      <meshPhongMaterial
        attach='material'
        recieveShadow
        vertexColors={THREE.VertexColors}
      />
    </instancedMesh>
  )
}
