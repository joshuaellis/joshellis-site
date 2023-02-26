export const isValidHttpUrl = (string: string) => {
  let url

  try {
    url = new URL(string)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const generateExperimentUrl = (experiment: string) =>
  `https://github.com/joshuaellis/joshellis-site/tree/main/src/features/${experiment}`
