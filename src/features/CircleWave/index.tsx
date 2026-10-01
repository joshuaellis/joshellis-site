import { useEffect, useRef } from 'react'

import { DEFAULTS, EXTENT, drawFrame, type Mode } from './draw'

import styles from './CircleWave.module.css'

const MODES: Mode[] = ['waves', 'dots', 'lines']

/** Share of the smaller canvas dimension the circle fills. */
const FIT = 0.9

export const CircleWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const modeRef = useRef<Mode>('waves')

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (!canvas || !ctx) {
      return
    }

    let frame = 0

    const render = () => {
      const dpr = window.devicePixelRatio
      const width = Math.round(canvas.clientWidth * dpr)
      const height = Math.round(canvas.clientHeight * dpr)

      // Assigning width/height clears the canvas, so only do it when the size changed
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }

      const scale = ((Math.min(width, height) / 2) * FIT) / EXTENT

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, width, height)
      ctx.setTransform(scale, 0, 0, scale, width / 2, height / 2)
      drawFrame(ctx, modeRef.current, performance.now() * DEFAULTS.speed)

      frame = requestAnimationFrame(render)
    }

    render()

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className={styles.root}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <fieldset className={styles.modes}>
        <legend className="visually-hidden">Mode</legend>
        {MODES.map((mode, index) => (
          <label key={mode} className={`t-XXS ${styles.mode}`}>
            <input
              className="visually-hidden"
              type="radio"
              name="circle-wave-mode"
              value={mode}
              defaultChecked={index === 0}
              onChange={() => {
                modeRef.current = mode
              }}
            />
            <span aria-hidden="true">{index + 1}</span>
            <span className="visually-hidden">{mode}</span>
          </label>
        ))}
      </fieldset>
    </div>
  )
}
