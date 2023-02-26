import * as Layout from 'layouts/Experiments'

import { ThemeToggle } from 'features/ThemeToggle'

const ThemeTogglePage = () => (
  <Layout.Root
    seo={{
      title: 'Theme Toggle',
      description: 'A theme toggle experiment for the react-spring website.',
    }}
  >
    <Layout.Header experimentName="ThemeToggle">
      <Layout.HeaderTitle>Theme Toggle</Layout.HeaderTitle>
      <Layout.HeaderSubtitle>September 2022</Layout.HeaderSubtitle>
    </Layout.Header>
    <Layout.Main
      css={{
        height: 240,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemeToggle />
    </Layout.Main>
    <Layout.Footer>
      <Layout.FooterLink type="previous" href="/experiments/macos-dock">
        MacOS Dock
      </Layout.FooterLink>
    </Layout.Footer>
  </Layout.Root>
)

export default ThemeTogglePage
