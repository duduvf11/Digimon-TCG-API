import { useContext } from 'react';
import "./header.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
    const {theme} = useContext(ThemeContext)

  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme={theme}>
        <Container>
            <Navbar.Brand href="/Digimon-TCG-API">DIGIMON TCG API</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Alunos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#RA/2525259">Eduardo Viegas Francisco</NavDropdown.Item>
                    <NavDropdown.Item href="#RA/2503573">Rodrigo Aleixo Fidelis Faria</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            <Button className='button' href="/Digimon-TCG-API/digimons" variant="success">Adicionar Digimon</Button>{' '}
            <Button className='button' href="/Digimon-TCG-API/users/new" variant="success">Cadastro</Button>{' '}
            <Button className='button' href="/Digimon-TCG-API/users/login" variant="success">Login</Button>{' '}
        </Container>
        </Navbar>
    </div>
  )
}

export default Header