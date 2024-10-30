export const WidgetPlausible = () => {
  if (!process.env.ENABLE_PLAUSIBLE) {
    return null
  }

  return (
    <script
      defer
      data-domain="joshellis.co.uk"
      src="https://plausible.io/js/script.js"
    />
  )
}
