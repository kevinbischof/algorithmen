import { useEffect, useState } from 'react'

export const breakpoints = {
  sm: 320,
  md: 768,
  lg: 1024,
}

export const getIsMobile = (): boolean => {
  const [width, setWidth] = useState(window.innerWidth)

  function handleWindowSizeChange(): void {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return width < breakpoints.md
}

/*
ReferenceError: Cannot access 'routes' before initialization

export function getHrefByRouteName(name: string): string {
  const result = routes.find((route) => route.name === name)
  return result ? result.href : ''
}
 */

export default getIsMobile
