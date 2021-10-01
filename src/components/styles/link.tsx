import React from 'react'

interface LinkProps {
  className?: string
  href: string
  children: React.ReactNode
}

export const Link = ({ className, href, children }: LinkProps) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}

export default Link
