/* eslint-disable no-console */
import express from 'express';
import compression from 'compression';
import next from 'next';

import sendRobots, { FILE_NAME_ROBOTS } from './robots';
import sendSitemap, { FILE_NAME_SITEMAP } from './sitemap';

let dev;
switch (process.env.NODE_ENV_CUSTOM) {
  case 'production':
    dev = false;
    break;
  default:
    dev = true;
    break;
}

const port = process.env.PORT || 3000;

if (
  dev ||
  process.env.NODE_ENV_TEST === 'staging' ||
  process.env.NODE_ENV_TEST === 'production'
) {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.enable('strict routing');
  server.use(compression());
  server.use(express.json());

  // FILES //

  server.get(`/${FILE_NAME_ROBOTS}`, (req, res) => {
    sendRobots(req, res, handle);
  });

  server.get(`/${FILE_NAME_SITEMAP}`, (req, res) => {
    sendSitemap(req, res, handle);
  });

  // HOME //

  server.get('/', (req, res) => {
    render(req, res, '/', req.query);
  });

  // CATCHALL //

  server.get('*', (req, res) => handle(req, res));

  // LISTEN //

  server.listen(port, err => {
    if (err) throw err;
    console.log(`WEBSITE MODE: ${process.env.NODE_ENV_CUSTOM}`);
    console.log(`RUNNING ON PORT: ${port}`);
  });

  //
});

const render = (req, res, pagePath, queryParams, options = null) => {
  if (options) {
    // console.log('set options', options)
    if (options.maxAge !== null && options.maxAge > 0) {
      res.header('Cache-Control', `public, max-age=${options.maxAge}`);
    }
  }

  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
};
