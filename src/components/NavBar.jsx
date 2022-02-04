import react from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

export default function NavBar() {
    return (<>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Oi Filoi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Tienda</Nav.Link>
                        <NavDropdown title="Pedidos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Amigurumis</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Chalecos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bordados</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Especiales</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>);
};