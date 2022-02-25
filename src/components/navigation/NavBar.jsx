import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (<>
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Oi Filoi</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Categorías">
              <NavDropdown.Item href="/category/Amigurumis">Amigurumis</NavDropdown.Item>
              <NavDropdown.Item href="/category/Chalecos">Chalecos</NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Pedidos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pedidos/amigurumis">Amigurumis</NavDropdown.Item>
              <NavDropdown.Item href="/pedidos/chalecos">Chalecos</NavDropdown.Item>
              <NavDropdown.Item href="/pedidos/bordados">Bordados</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#pedidos/especiales">Especiales</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <Nav className="me-auto">
          <CartWidget/>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      </Container>
    </Navbar>
  </>);
}