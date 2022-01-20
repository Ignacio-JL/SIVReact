import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import '../Navbar/NavBar.css';

function NavBar() {
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><NavLink to="/" className='navbar-item'>Creaciones SIV</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav >
                            <NavLink to='/' className="nav-link">Inicio</NavLink>
                            <NavLink to='/contacto' className="nav-link">Contacto</NavLink>
                            
                            
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavLink to="/products/Nene" className="dropdown-item">Niños</NavLink>
                                <NavLink to="/products/Nena" className="dropdown-item">Niñas</NavLink>
                                <NavLink to="/products/Bebe" className="dropdown-item">Bebés</NavLink>
                                <NavDropdown.Divider />
                                <NavLink to="/products/" className="dropdown-item">Todos</NavLink>
                            </NavDropdown>
                            <NavLink to="/cart/" className="nav-link"><CartWidget /></NavLink>
                        </Nav>
                        
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
