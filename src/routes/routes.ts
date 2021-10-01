import React from 'react'
import AlgorithmsOverview from '../components/algorithms/algorithms-overview'
import DiscreteMathematicsOverview from '../components/discrete-mathematics/discrete-mathematics-overview'
import IsbnCheck from '../components/discrete-mathematics/isbn-check/isbn-check'

interface Link {
  id: number
  href: string
  name: string
  component: React.ComponentType<any>
}

export const routes: Link[] = [
  { id: 2, href: '/algorithms', name: 'Algorithmen', component: AlgorithmsOverview },
  { id: 3, href: '/discrete-mathematics', name: 'Diskrete Mathematik', component: DiscreteMathematicsOverview },
  // { id: 4, href: '/binary-trees', name: 'Binäre Bäume' },
  { id: 5, href: '/isbn-check', name: 'ISBN-Check', component: IsbnCheck },
]

export default routes
