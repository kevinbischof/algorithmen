import { TileProps } from '../tiles/tile'

interface AlgorithmTile extends TileProps {
  id: number
}

export const AlgorithmTiles: AlgorithmTile[] = [
  {
    id: 1,
    title: 'Binäre Bäume',
    image: `${process.env.PUBLIC_URL}/images/algorithms/binaere_baeume.png`,
    description: 'Beschreibung',
    href: '/binary-trees',
  },
]

export default AlgorithmTiles
