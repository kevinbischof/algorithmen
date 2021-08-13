interface Link {
  id: number
  href: string
  name: string
}

export const routes: Link[] = [
  { id: 1, href: '/', name: 'Home' },
  { id: 2, href: '/algorithms', name: 'Algorithmen' },
]

export default routes
