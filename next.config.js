/* eslint-disable global-require */
const { IgnorePlugin } = require('webpack');
const path = require('path');

const initExport = {
  webpack: (config, { dev, isServer }) => {
    const prod = !dev;

    config.plugins.push(new IgnorePlugin(/^\.\/locale$/, /moment$/));

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      lib: path.resolve(__dirname, 'src/lib/'),
      layouts: path.resolve(__dirname, 'src/layouts/'),
      icons: path.resolve(__dirname, 'public/icons/'),
      store: path.resolve(__dirname, 'src/store/'),
    };

    const iconsPath = path.resolve(__dirname, '.', 'public', 'icons');

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
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]',
          },
        },
        {
          loader: 'file-loader',
          options: {
            outputPath: 'public/',
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

    return config;
  },
};

/* eslint-enable global-require */
module.exports = initExport;
