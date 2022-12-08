import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">My Movies </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">subscribtion</Nav.Link>
            <NavDropdown title="categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Horror 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Comedy
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Tv series
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Enter your movie name here"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavBar
