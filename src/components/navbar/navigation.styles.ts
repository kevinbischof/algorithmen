import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkStyled = styled(Link)`
  color: rgb(255, 255, 255, 0.55);
  display: block;
  text-decoration: none;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  a {
    &:hover {
      color: #474948;
    }
  }
  transition: {
    transition-property: color, background-color, border-color;
    transition-duration: 0.15s, 0.15s, 0.15s;
    transition-timing-function: ease-in-out, ease-in-out, ease-in-out;
    transition-delay: 0s, 0s, 0s;
  }
`

export default LinkStyled
