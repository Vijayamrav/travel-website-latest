import { Container } from "react-bootstrap";
import React from "react";
import Button from 'react-bootstrap/Button';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from "react-router-dom";

export const Header=()=>{
    return(
        <>
        <section className='header-section'>
            <Container>
            <Navbar  expand='lg' className="bg-body-tertiary mb-3">
          <Container fluid>
            {/* logo section start */}
            <Navbar.Brand>Website Title</Navbar.Brand>
            {/* logo section end */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
            >
                {/* Mobile logo section start */}
              <Offcanvas.Header>
                <h1 className="logo">Website Title</h1>
                <span className="navbar-toggler ms-auto">
                    <i className="bi bi-x-lg"></i>
                </span>
              </Offcanvas.Header>
              {/* mobile logo section end */}
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/">ABOUT US</NavLink>
                  <NavLink to="/">TOURS</NavLink>
                  
                  
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">SPAIN TOURS</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">ITALY TOURS</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">FRANCE TOURS</NavDropdown.Item>
                  </NavDropdown>

                  <NavLink to="/">GALLERY</NavLink>
                  <NavLink to="/">CONTACT</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
            </Container>
        </section>
        </>
    )
}