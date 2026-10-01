import { defineConfig, fontProviders } from 'astro/config'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://www.joshellis.co.uk',
  integrations: [react()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['-apple-system', 'system-ui', 'sans-serif'],
      // Without the optical-size axis Inter renders noticeably wider than the rsms.me build
      options: { experimental: { variableAxis: { opsz: [['14', '32']] } } },
    },
  ],
})
