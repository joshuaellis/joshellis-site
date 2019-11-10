/* eslint-disable consistent-return */
/* eslint-disable no-console */
// packages
const express = require('express');
const next = require('next');
const compression = require('compression');
const LRUCache = require('lru-cache');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

// custom scripts
const router = require('../routes/index.js');
const logger = require('./logger.js');
const sendSitemap = require('./sitemap');
const sendRobots = require('./robots');

dotenv.config();

const isDev = process.env.NODE_ENV !== 'production';
const isProd = !isDev;

const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;
const publicEnvFilename = 'public.env';

const app = next({ dev: isDev });
const handle = app.getRequestHandler();

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
});

// share public env variables (if not already set)
try {
  if (fs.existsSync(path.resolve(__dirname, publicEnvFilename))) {
    const publicEnv = dotenv.parse(
      fs.readFileSync(path.resolve(__dirname, publicEnvFilename)),
    );
    Object.keys(publicEnv).forEach(key => {
      if (!process.env[key]) {
        process.env[key] = publicEnv[key];
      }
    });
  }
} catch (err) {
  // silence is golden
}

const buildId = isProd
  ? fs.readFileSync('./.next/BUILD_ID', 'utf8').toString()
  : null;

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
const getCacheKey = function getCacheKey(req) {
  return `${req.url}`;
};

const renderAndCache = (req, res, pagePath, queryParams) => {
  const key = getCacheKey(req);

  if (ssrCache.has(key) && !isDev) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      if (!isDev) {
        console.log(`CACHE MISS: ${key}`);
        ssrCache.set(key, html);
      }

      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
};

const routerHandler = router.getRequestHandler(
  app,
  ({ req, res, route, query }) => {
    renderAndCache(req, res, route.page, query);
  },
);

app.prepare().then(() => {
  const server = express();

  // const staticDir = path.resolve(__dirname, '..', '.next/static');
  // server.use('/_next/static', express.static(staticDir));

  server.use(compression({ threshold: 0 }));
  server.use(
    cors({
      origin:
        prettyHost.indexOf('http') !== -1 ? prettyHost : `http://${prettyHost}`,
      credentials: true,
    }),
  );
  server.use(helmet());
  server.use(routerHandler);

  if (isProd) {
    server.use((req, res, nextServer) => {
      const hostname =
        req.hostname === 'www.joshellis.co.uk'
          ? 'joshellis.co.uk'
          : req.hostname;

      if (
        req.headers['x-forwarded-proto'] === 'http' ||
        req.hostname === 'www.joshellis.co.uk'
      ) {
        res.redirect(301, `https://${hostname}${req.url}`);
        return;
      }

      res.setHeader(
        'strict-transport-security',
        'max-age=31536000; includeSubDomains; preload',
      );

      nextServer();
    });
  }

  server.get(`/favicon.ico`, (req, res) =>
    app.serveStatic(req, res, path.resolve('./static/icons/favicon.ico')),
  );

  server.get('/sw.js', (req, res) =>
    app.serveStatic(req, res, path.resolve('./.next/sw.js')),
  );

  server.get('/manifest.html', (req, res) =>
    app.serveStatic(req, res, path.resolve('./.next/manifest.html')),
  );

  server.get('/manifest.appcache', (req, res) =>
    app.serveStatic(req, res, path.resolve('./.next/manifest.appcache')),
  );

  server.get('/work/:project', (req, res) =>
    app.render(req, res, '/post', { project: req.params.slug }),
  );

  if (isProd) {
    server.get('/_next/-/app.js', (req, res) =>
      app.serveStatic(req, res, path.resolve('./.next/app.js')),
    );

    const hash = buildId;

    server.get(`/_next/${hash}/app.js`, (req, res) =>
      app.serveStatic(req, res, path.resolve('./.next/app.js')),
    );
  }

  server.get('*', (req, res) => handle(req, res));

  server.get(`/robots.txt`, (req, res) => {
    sendRobots(req, res, handle);
  });

  server.get(`/sitemap.xml`, (req, res) => {
    sendSitemap(req, res, handle);
  });

  server.listen(port, host, err => {
    if (err) {
      return logger.error(err.message);
    }
  });
});
