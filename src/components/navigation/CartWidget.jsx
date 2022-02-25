import { Button, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

export default function CartWidget() {
  return (
    <Nav.Link href="/cart">
      <Button variant="primary">
        <FaShoppingCart />
        <span> 0 </span>
      </Button>
    </Nav.Link>);
}