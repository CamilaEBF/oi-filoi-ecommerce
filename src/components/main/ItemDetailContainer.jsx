import { Button, Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { getItem } from "../../assets/Items";

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const [found, setFound] = useState(false);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        const getData = async () => {
            const query = doc(db, "items", itemId);
            const res = await getDoc(query);
            const item = res.data();
            setItem(item);
            setFound(true);
            console.log(item);
        };
        getData().finally(() => setLoading(false));
    }, [itemId]);

    return (<Container>
        {loading && !found ?
            (<Spinner animation="border" role="status" className="col-12">
                <span className="visually-hidden">Loading...</span>
            </Spinner>)
            :
            (<>
                {found ? (
                    <Row className="justify-content-center">
                        <ItemDetail item={item}></ItemDetail>
                    </Row>
                ) : (<div className="container p-5">
                    <h1>404</h1>
                    <h2>No se encontró el producto</h2>
                    <Link to="/">
                        <Button variant="secondary" className="button-back">
                            Volver a la tienda
                        </Button>
                    </Link>
                </div>)
                }
            </>)
        }
    </Container>);
}
