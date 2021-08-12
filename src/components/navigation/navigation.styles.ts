import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavLinkListStyled = styled.div.attrs({
  className: 'h-12 py-2',
})``

export const NavLinkStyled = styled(Link).attrs({
  className: 'text-2xl',
})``

export default NavLinkStyled
