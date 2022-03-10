import { Col, Container, Row } from "react-bootstrap";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getItems } from "../../assets/Items";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getItems().then((res) => {
      setItems(res.filter((item) =>  {
        if(categoryId) {
        return item.category === categoryId;
        } else {
          return item;
        }
        }));
    }).catch((err) => {
      console.log('Hubo un error durante la obtención de items.')
    }).finally(() => {
      setLoading(false);
    })
  }, [categoryId]);

  return (<Container>
    <Row className="">
      <Col className="m-3">
        <h2>Productos: {categoryId}</h2>
      </Col>
    </Row>
    <ItemList items={items} loading={loading} />
  </Container>);
}