const express = require('express')
const next = require('next')
const compression = require('compression')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV_CUSTOM === 'dev'
const prod = process.env.NODE_ENV_CUSTOM === 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const redirects = [
  { from: '/work', to: '/', type: 301 },
  { from: '/work/*', to: '/', type: 301 }
]

app.prepare().then(() => {
  const server = express()
  server.enable('strict routing')
  server.use(compression())

  /**
   *
   * Redirects of the old website
   *
   */

  redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to)
    })
  })

  server.all('*', (req, res) => {
    if (!prod) res.setHeader('X-Robots-Tag', 'noindex, nofollow')
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on port ${port} 💁🏻‍♀️`)
  })
})
