import {Button} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa";

export default function CartWidget() {
  return (<Button variant="primary">
    <FaShoppingCart/>
    <span> 0 </span>
  </Button>);
}