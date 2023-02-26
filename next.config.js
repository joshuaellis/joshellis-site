const remarkDirective = require('remark-directive')

const rehypeHighlightCode = require('./scripts/mdx/rehype-highlight-code')
const rehypeMetaAttribute = require('./scripts/mdx/rehype-meta-attribute')
const parseCallouts = require('./scripts/mdx/remark-plugin-parser')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    rehypePlugins: [rehypeHighlightCode, rehypeMetaAttribute],
    remarkPlugins: [remarkDirective, parseCallouts],
  },
})

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['tsx', 'ts', 'mdx'],
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
  },
}

module.exports = withMDX(config)
