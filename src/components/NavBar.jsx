import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function NavBar() {
    return (<>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Oi Filoi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#tienda">Tienda</Nav.Link>
                        <NavDropdown title="Pedidos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#pedidos/amigurumis">Amigurumis</NavDropdown.Item>
                            <NavDropdown.Item href="#pedidos/chalecos">Chalecos</NavDropdown.Item>
                            <NavDropdown.Item href="#pedidos/bordados">Bordados</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#pedidos/especiales">Especiales</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>);
};