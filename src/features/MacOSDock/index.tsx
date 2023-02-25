import { Box } from 'components/Box'

import { Card } from './Card'
import { Dock } from './Dock'
import { DockCard } from './DockCard'
import { DockDivider } from './DockDivider'

const GRADIENTS = [
  'https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg',
  null,
  'https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg',
]

export function MacOSDock() {
  return (
    <Box
      css={{
        backgroundColor: '#171717',
        width: '100%',
        height: '100%',
      }}
    >
      <Dock>
        {GRADIENTS.map((src, index) =>
          src ? (
            <DockCard key={src}>
              <Card src={src} />
            </DockCard>
          ) : (
            <DockDivider key={index} />
          )
        )}
      </Dock>
    </Box>
  )
}
