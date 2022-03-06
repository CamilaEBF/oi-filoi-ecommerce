import { useContext } from "react";
import { Button, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

export default function CartWidget() {
  const cartContext = useContext(CartContext);

  return (
    <Nav.Link as={Link} to="/cart">
      <Button variant="primary">
        <FaShoppingCart />
        <span> {cartContext.quantity} </span>
      </Button>
    </Nav.Link>);
}