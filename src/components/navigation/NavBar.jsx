import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (<>
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Oi Filoi</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Categorías">
              <NavDropdown.Item as={Link} to="/category/Amigurumis">Amigurumis</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Chalecos">Chalecos</NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Pedidos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/pedidos/amigurumis">Amigurumis</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pedidos/chalecos">Chalecos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pedidos/bordados">Bordados</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item as={Link} to="#pedidos/especiales">Especiales</NavDropdown.Item>
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