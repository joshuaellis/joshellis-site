import { MacOSDock } from 'features/MacOSDock'
import * as Layout from 'layouts/Experiments'

const MacOSDockPage = () => (
  <Layout.Root
    seo={{
      title: 'MacOS Dock',
      description:
        'A MacOS Dock replica in web using the useSpringValue hook from react-spring.',
    }}
  >
    <Layout.Header experimentName="MacOSDock">
      <Layout.HeaderTitle>MacOS Dock</Layout.HeaderTitle>
      <Layout.HeaderSubtitle>November 2022</Layout.HeaderSubtitle>
    </Layout.Header>
    <Layout.Main
      css={{
        height: 420,
      }}
    >
      <MacOSDock />
    </Layout.Main>
    <Layout.Footer>
      <div />
      <Layout.FooterLink type="next" href="/experiments/theme-toggle">
        Theme Toggle
      </Layout.FooterLink>
    </Layout.Footer>
  </Layout.Root>
)

export default MacOSDockPage
