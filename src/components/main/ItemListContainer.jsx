import { Col, Container, Row } from "react-bootstrap";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { ItemsArray } from "../assets/Items";

export default function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ItemsArray);
    }, 2000);
  });
  const onAdd = (count) => {
    console.log(`Se agregó al carrito ${count} del producto.`)
  };

  useEffect(() => {
    getItems.then((res) => {
      setItems(res);
    }).catch((err) => {
      console.log('Hubo un error durante la obtención de items.')
    }).finally(() => {
      setLoading(false);
    })
  });

  return (<Container>
    <Row className="">
      <Col className="m-3">
        <h2>{props.greeting}</h2>
      </Col>
    </Row>
    <ItemList items={items} loading={loading} />
    <Row className="m-5 bg-secondary justify-content-center border-3 border-secondary">
      <ItemCount stock="5" initial="1" onAdd={onAdd} />
    </Row>
  </Container>);
}