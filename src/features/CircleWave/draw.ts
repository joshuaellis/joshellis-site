export const DEFAULTS = {
  colors: ['#5DA9E2', '#FF6F85', '#7eff8e'],
  width: 8,
  speed: 0.001,
  frequency: 8,
  amplitude: 32,
  radius: 256,
  shift: (2 * Math.PI) / 3,
  pixelAmount: 360,
  composition: 'lighten' as GlobalCompositeOperation,
}

/** The furthest any point gets from the centre, used to scale the drawing to fit. */
export const EXTENT = DEFAULTS.radius + DEFAULTS.amplitude + DEFAULTS.width

export type Mode = 'waves' | 'dots' | 'lines'

type Draw = (
  ctx: CanvasRenderingContext2D,
  color: string,
  index: number,
  t: number
) => void

const N = 360

const getRadii = (count: number, index: number, t: number) =>
  Array.from({ length: count }, (_, i) => {
    const a = i * 2 * (Math.PI / count)
    const c = Math.cos(a * DEFAULTS.frequency - index * DEFAULTS.shift + t)
    const p = ((1 + Math.cos(a - t)) / 2) ** 3

    return DEFAULTS.radius + DEFAULTS.amplitude * c * p
  })

const waves: Draw = (ctx, color, index, t) => {
  const points = getRadii(N, index, t).map((r, i) => ({
    x: r * Math.cos((Math.PI / (N / 2)) * i),
    y: r * Math.sin((Math.PI / (N / 2)) * i),
  }))

  ctx.beginPath()

  for (let i = 0; i < points.length - 1; i += 1) {
    const xc = (points[i].x + points[i + 1].x) / 2
    const yc = (points[i].y + points[i + 1].y) / 2
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
  }

  ctx.lineWidth = DEFAULTS.width
  ctx.strokeStyle = color
  ctx.closePath()
  ctx.stroke()
}

const dots: Draw = (ctx, color, index, t) => {
  const count = DEFAULTS.pixelAmount
  let angle = Math.PI / (count / 2)

  ctx.fillStyle = color

  getRadii(count, index, t).forEach((r) => {
    ctx.fillRect(
      r * Math.cos(angle),
      r * Math.sin(angle),
      DEFAULTS.width,
      DEFAULTS.width
    )
    angle += Math.PI / (count / 2)
  })
}

/**
 * The 2019 version passed the whole radii array to d3's `lineRadial().angle()`,
 * which kept only the first value, so every point sits on one spinning ray.
 * That accident is the look of this mode, so it's reproduced here without d3.
 */
const lines: Draw = (ctx, color, index, t) => {
  const radii = getRadii(N, index, t)
  const angle = radii[0]

  ctx.beginPath()
  radii.forEach((r) => {
    ctx.lineTo(r * Math.sin(angle), -r * Math.cos(angle))
  })
  ctx.closePath()

  ctx.lineWidth = DEFAULTS.width
  ctx.strokeStyle = color
  ctx.stroke()
}

const DRAW: Record<Mode, Draw> = { waves, dots, lines }

export const drawFrame = (
  ctx: CanvasRenderingContext2D,
  mode: Mode,
  t: number
) => {
  ctx.lineJoin = 'round'
  ctx.globalCompositeOperation = DEFAULTS.composition

  DEFAULTS.colors.forEach((color, index) => DRAW[mode](ctx, color, index, t))
}
