import React from 'react'
import Tile from '../tiles/tile'
import DiscreteMathematicsTiles from './discrete-mathematics-overview.tiles'

export const DiscreteMathematicsOverview = () => {
  return (
    <>
      <h1>Diskrete Mathematik - Übersicht</h1>
      {DiscreteMathematicsTiles.map((tile) => {
        return <Tile key={tile.id} tile={tile} />
      })}
    </>
  )
}

export default DiscreteMathematicsOverview
