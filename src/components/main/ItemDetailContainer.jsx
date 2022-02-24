import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ItemsArray } from "../assets/Items";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemsArray[0]);
        }, 2000);
    });

    useEffect(() => {
        getItem.then((res) => {
            setItem(res);
        }).catch((err) => {
            console.log('Hubo un error durante la obtención de items.')
        }).finally(() => {
            setLoading(false);
        })
    });

    return (<Container>
        <Row className="justify-content-center">
            <ItemDetail item={item}></ItemDetail>
        </Row>
    </Container>);
}
