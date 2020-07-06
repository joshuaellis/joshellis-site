const express = require('express')
const compression = require('compression')
const next = require('next')

const FILE_NAME_SITEMAP = 'sitemap.xml'
const FILE_NAME_ROBOTS = 'robots.txt'

let dev
switch (process.env.NODE_ENV_CUSTOM) {
  case 'production':
    dev = false
    break
  default:
    dev = true
    break
}

const port = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.enable('strict routing')
  server.use(compression())
  server.use(express.json())

  // FILES //

  server.get(`/${FILE_NAME_ROBOTS}`, (req, res) => {
    res.status(200).sendFile(FILE_NAME_ROBOTS, {
      root: `${__dirname}/static/`,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
    })
  })

  server.get(`/${FILE_NAME_SITEMAP}`, (req, res) => {
    res.status(200).sendFile(FILE_NAME_SITEMAP, {
      root: `${__dirname}/static/`,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
    })
  })

  // HOME //

  server.get('/', (req, res) => {
    render(req, res, '/', req.query)
  })

  // CATCHALL //

  server.get('*', (req, res) => handle(req, res))

  // LISTEN //

  server.listen(port, err => {
    if (err) throw err
    console.log(`WEBSITE MODE: ${process.env.NODE_ENV_CUSTOM}`)
    console.log(`RUNNING ON PORT: ${port}`)
  })

  //
})

const render = (req, res, pagePath, queryParams, options = null) => {
  if (options) {
    // console.log('set options', options)
    if (options.maxAge !== null && options.maxAge > 0) {
      res.header('Cache-Control', `public, max-age=${options.maxAge}`)
    }
  }

  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      res.send(html)
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}
