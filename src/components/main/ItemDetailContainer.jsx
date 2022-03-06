import { Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../../assets/Items";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();


    useEffect(() => {
        getItem(itemId).then((res) => {
            setItem(res);
        }).catch((err) => {
            console.log('Hubo un error durante la obtención de items.')
        }).finally(() => {
            setLoading(false);
        })
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
