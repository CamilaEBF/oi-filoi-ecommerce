import {Col, Container, Row} from "react-bootstrap";
import ItemCount from "./ItemCount";

export default function ItemListContainer(props) {

  const onAdd = (count) => {
    console.log(`Se agregó al carrito ${count} del producto.`)
  };

  return (<Container>
    <Row className="justify-content-md-center align-middle">
      <Col xs lg="4">{props.greeting}</Col>
      <ItemCount stock="5" initial="1" onAdd={onAdd}/>
    </Row>
  </Container>);
}