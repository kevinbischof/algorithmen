import React from 'react'
import Tile from '../tiles/tile'
import AlgorithmTiles from './algorithms-overview.tiles'

export const AlgorithmsOverview = () => {
  return (
    <>
      <h1>Algorithmen - Übersicht</h1>
      {AlgorithmTiles.map((tile) => {
        return <Tile key={tile.id} tile={tile} />
      })}
    </>
  )
}

export default AlgorithmsOverview
