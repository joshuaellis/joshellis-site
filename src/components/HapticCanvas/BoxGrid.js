import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()

export default function BoxGrid ({ gridSize = [384, 288] }) {
  const [gridSizeX, gridSizeY] = gridSize
  const TOTAL_BOXES = gridSizeX * gridSizeY
  const meshRef = useRef()

  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(TOTAL_BOXES)
          .fill()
          .flatMap((_, i) =>
            tempColor.set(i % 2 ? '#ff0000' : '#0000ff').toArray()
          )
      ),
    [TOTAL_BOXES]
  )
  useFrame(() => {
    let totalCount = 0
    for (let x = 0; x < gridSizeX; x++) {
      for (let y = 0; y < gridSizeY; y++) {
        const id = totalCount++
        tempObject.position.set(x - gridSizeX / 2, y - gridSizeY / 2, 0)
        tempObject.updateMatrix()
        meshRef.current.setMatrixAt(id, tempObject.matrix)
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, TOTAL_BOXES]}>
      <boxBufferGeometry
        position={[0, 0, 0]}
        attach='geometry'
        args={[1, 1, 1]}
      >
        <instancedBufferAttribute
          attachObject={['attributes', 'color']}
          args={[colorArray, 3]}
        />
      </boxBufferGeometry>
      <meshPhongMaterial attach='material' vertexColors={THREE.VertexColors} />
    </instancedMesh>
  )
}
