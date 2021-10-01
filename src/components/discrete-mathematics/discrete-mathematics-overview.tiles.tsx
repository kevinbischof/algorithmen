import { TileProps } from '../tiles/tile'

interface DiscreteMathematicsTile extends TileProps {
  id: number
}

export const DiscreteMathematicsTiles: DiscreteMathematicsTile[] = [
  {
    id: 1,
    title: 'ISBN-Check',
    image: '',
    description: 'Prüfe, ob eine ISBN korrekt ist',
    href: '/isbn-check',
  },
]

export default DiscreteMathematicsTiles
