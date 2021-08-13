import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/all'
import routes from '../routes/routes'
import NavLinkStyled, { NavLinkListStyled } from './navigation.styles'

interface NavigationMobileProps {
  isOpen: boolean
  toggle: () => void
}

export const MobileNavigation = ({ isOpen, toggle }: NavigationMobileProps) => {
  return (
    <>
      <div className={`grid justify-items-end content-center h-10 pr-2 bg-gray-800 ${!isOpen ? 'mb-4' : ''}`}>
        {isOpen ? (
          <AiOutlineClose onClick={toggle} size={26} color="white" />
        ) : (
          <AiOutlineMenu onClick={toggle} size={26} color="white" />
        )}
      </div>
      <div className={isOpen ? 'grid content-center divide-y divide-white-100 bg-gray-100 mb-4' : 'hidden'}>
        {routes.map((route) => {
          return (
            <NavLinkListStyled key={route.id}>
              <NavLinkStyled to={route.href}>{route.name}</NavLinkStyled>
            </NavLinkListStyled>
          )
        })}
      </div>
    </>
  )
}

export default MobileNavigation
