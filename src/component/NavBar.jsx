import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Creaciones SIV</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                        <Nav.Link href="#"><CartWidget /></Nav.Link>
                        
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
