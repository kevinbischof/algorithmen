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

export default getIsMobile
