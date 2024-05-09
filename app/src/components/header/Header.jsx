import React from 'react';
import "./header.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="">
        <Container>
            <Navbar.Brand href="#home" >DIGIMON TCG API</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Alunos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#RA/2525259">Eduardo Viegas Francisco</NavDropdown.Item>
                    <NavDropdown.Item href="#RA/2503573">Rodrigo Aleixo Fidelis Faria</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header