import { Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        const getData = async () => {
            const query = doc(db, "items", itemId);
            const res = await getDoc(query);
            const item = res.data();
            setItem(item);
        };
        getData().finally(() => setLoading(false));
    }, [itemId]); 

    return (<Container>
        {loading ?
            (<Spinner animation="border" role="status" className="col-12">
                <span className="visually-hidden">Loading...</span>
            </Spinner>)
            :
            (<>
                <Row className="justify-content-center">
                    <ItemDetail item={item}></ItemDetail>
                </Row>
            </>)
        }
    </Container>);
}
