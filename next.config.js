/* eslint-disable global-require */
const { IgnorePlugin } = require('webpack');
const autoprefixer = require('autoprefixer');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');

const initExport = {
  webpack: (config, { dev, isServer }) => {
    const prod = !dev;

    config.plugins.push(new IgnorePlugin(/^\.\/locale$/, /moment$/));

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'components/'),
      styles: path.resolve(__dirname, 'styles/'),
      lib: path.resolve(__dirname, 'lib/'),
      layouts: path.resolve(__dirname, 'layouts/'),
      icons: path.resolve(__dirname, 'static/icons/'),
      store: path.resolve(__dirname, 'store/'),
    };

    const iconsPath = path.resolve(__dirname, '.', 'static', 'icons');

    config.module.rules.forEach(rule => {
      if (rule.test.toString().indexOf('svg') !== -1) {
        // eslint-disable-next-line no-param-reassign
        rule.exclude = [iconsPath];
      }
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        'babel-loader',
        {
          loader: 'react-svg-loader',
          options: {
            svgo: {
              plugins: [{ removeTitle: true }],
            },
          },
        },
      ],
      include: [iconsPath],
    });

    config.module.rules.push({
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      use: [
        // using emit-file-loader just to shut up 'Cannot find module',
        // it will make copy of image in component directory
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]',
          },
        },
        // this will create image copy, that we will use,
        // output path - '/.next/static/longhash.png'
        // url - '/_next/static/longhash.png'
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/',
            publicPath: '/_next/',
          },
        },
      ],
    });

    if (!prod && process.env.ANALYZE_BUILD) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        }),
      );
    }

    config.module.rules.forEach(rule => {
      if (Array.isArray(rule.use)) {
        rule.use.forEach(u => {
          if (u.loader === 'css-loader' && u.options) {
            // eslint-disable-next-line no-param-reassign
            delete u.options.minimize;
          }
        });
      }
    });

    return config;
  },
};

/* eslint-enable global-require */
module.exports = withCSS(
  withSass(initExport, {
    postcssLoaderOptions: { plugins: [autoprefixer] },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
      localIdentName: '[local]___[hash:base64:5]',
    },
  }),
);
