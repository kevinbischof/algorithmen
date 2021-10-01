import React from 'react'

interface TitleProps {
  children: React.ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return <div>{children}</div>
}

export default Title
