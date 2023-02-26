import { MacOSDock } from 'features/MacOSDock'
import * as Layout from 'layouts/Experiments'

const MacOSDockPage = () => (
  <Layout.Root>
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
      <Layout.FooterLink type="previous" href="/experiments/css-gradient">
        CSS Graident
      </Layout.FooterLink>
      <Layout.FooterLink type="next" href="/experiments/css-gradient">
        CSS Graident
      </Layout.FooterLink>
    </Layout.Footer>
  </Layout.Root>
)

export default MacOSDockPage
