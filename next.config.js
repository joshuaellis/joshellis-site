const path = require('path')

const initExport = {
  webpack: (config, { dev, isServer }) => {
    const prod = !dev

    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, './src/components/'),
      lib: path.resolve(__dirname, 'src/lib/'),
      hooks: path.resolve(__dirname, './src/hooks/'),
      icons: path.resolve(__dirname, './public/icons/'),
      store: path.resolve(__dirname, './src/store/'),
      styles: path.resolve(__dirname, './src/styles')
    }

    const iconsPath = path.resolve(__dirname, '.', 'public', 'icons')

    config.module.rules.forEach(rule => {
      if (rule.test && rule.test.toString().indexOf('svg') !== -1) {
        rule.exclude = [iconsPath]
      }
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        'babel-loader',
        {
          loader: 'react-svg-loader',
          options: {
            svgo: {
              plugins: [{ removeTitle: true }]
            }
          }
        }
      ],
      include: [iconsPath]
    })

    if (!prod && process.env.ANALYZE_BUILD) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true
        })
      )
    }

    return config
  }
}

module.exports = initExport
