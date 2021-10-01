import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCode } from 'react-icons/all'
import getIsMobile from '../../helpers/helper'
import MobileNavigation from './navigationMobile'
import routes from '../../routes/routes'

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
          className="flex justify-between items-center h-16 pl-4 mb-4 bg-gray-800 text-white relative shadow-sm"
          role="presentation"
        >
          <Link to="/">
            <FaCode size={30} color="white" />
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
