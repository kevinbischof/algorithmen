import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import LinkStyled from './navigation.styles'

interface NavConfig {
  title: string
  expand: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined
  background: string
  variant: 'light' | 'dark'
}

const navConfig: NavConfig = {
  title: 'Algorithmen',
  expand: 'lg',
  background: 'dark',
  variant: 'dark',
}

export const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand={navConfig.expand} bg={navConfig.background} variant={navConfig.variant}>
        <Container>
          <Navbar.Brand href="/home">{navConfig.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkStyled to="/">Home</LinkStyled>
              <LinkStyled to="/algorithms-overview">Algorithmen</LinkStyled>

              <Nav.Link href="/algorithms-overview">Algorithmen</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
