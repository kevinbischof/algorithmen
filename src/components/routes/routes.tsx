interface Link {
  id: number
  href: string
  name: string
}

export const routes: Link[] = [
  { id: 1, href: '/', name: 'Home' },
  { id: 2, href: '/menu', name: 'Menu' },
  { id: 3, href: '/about', name: 'About' },
  { id: 4, href: '/contact', name: 'Contact' },
]

export default routes
