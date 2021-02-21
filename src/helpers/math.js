export const sinc = (x, k, w, amp) => {
  const a = Math.PI * (k * x - 1.0)

  // ...this math isn't quite right and needs to be resolved to allow a smoother transition between go and still
  if (k * x < w) {
    return 0
  }

  return Math.sin(a) / (a * amp)
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
