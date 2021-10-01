import { IconType } from 'react-icons'
import { ReactElement } from 'react'
import TileStyled from './tile.styles'
import Link from '../styles/link'

export interface TileInterface {
  tile: TileProps
}

export interface TileProps {
  title: string
  icon?: IconType
  image?: string
  description: string
  href: string
}

export const Tile = ({ tile }: TileInterface): ReactElement => {
  return (
    <Link href={tile.href}>
      <TileStyled>
        <div>{tile.title}</div>
        <div>{tile.icon}</div>
        <div>
          <img src={tile.image} alt="alt" />
        </div>
        <div>{tile.description}</div>
      </TileStyled>
    </Link>
  )
}

export default Tile
