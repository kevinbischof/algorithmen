import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import getIsMobile from '../../helpers/helper'
import MobileNavigation from './navigationMobile'
import routes from '../routes/routes'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = getIsMobile()
  const toggle = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isMobile ? (
        <MobileNavigation isOpen={isOpen} toggle={toggle} />
      ) : (
        <div
          className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
          role="presentation"
        >
          <Link to="/" className="pl-8">
            Logo
          </Link>
          <div className="pr-8 md:block">
            {routes.map((route) => {
              return (
                <Link to={route.href} key={route.id} className="p-4">
                  {route.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
