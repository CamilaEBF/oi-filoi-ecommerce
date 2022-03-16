import { Col, Container, Row } from "react-bootstrap";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const getData = async () => {
      if(categoryId) {
        const q = query(collection(db, "items"), where("category", "==", categoryId));
        const res = await getDocs(q);
        const items = res.docs.map(doc => ({id: doc.id, ...doc.data()}));
        setItems(items);
        } else {
          const query = collection(db,"items");
          const res = await getDocs(query);
          const items = res.docs.map(doc => ({id: doc.id, ...doc.data()}));
          setItems(items);
        }
        
        console.log(items);
      };
      getData().finally(() => setLoading(false));
  }, [items, categoryId]);

  return (<Container>
    <Row className="">
      <Col className="m-3">
        <h2>Productos: {categoryId}</h2>
      </Col>
    </Row>
    <ItemList items={items} loading={loading} />
  </Container>);
}