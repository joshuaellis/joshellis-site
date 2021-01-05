export default function waveNoiseGenerator ({
  amplitude,
  speed,
  waveHeight,
  waveLength,
  waveMultiplier
}) {
  return (x, y) => {
    const freq = (2.0 * Math.PI) / waveLength
    const phase = speed * freq
    const theta = Math.cos(x) * Math.sin(y) + x * y

    return (
      amplitude * Math.sin(theta * freq * phase) * waveHeight * waveMultiplier
    )
  }
}
