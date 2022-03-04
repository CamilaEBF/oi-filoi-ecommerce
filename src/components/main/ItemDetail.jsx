import { useContext, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";

export default function ItemDetail({ item }) {
    let navigate = useNavigate();
    const [count, setCount] = useState(0);
    const cartContext = useContext(CartContext);

    const onAdd = (count) => {
        cartContext.addToCart({item, quantity: count});
        setCount(count);
    };

    const routeChange = () => {
        navigate("/cart");
        console.log("Se ha cambiado de ruta.");
    }

    return (<>
        <Card border="info" style={{ width: '18rem' }} className="p-1 m-auto">
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.ImgOverlay>
                <Card.Title>{item.title}</Card.Title>
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                Precio: {item.price}
            </Card.Footer>
        </Card>
        <Row className="m-5 justify-content-center">
            <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
        </Row>
        {count > 0 &&
            <Button className="m-5" variant="secondary" onClick={routeChange}>
                Terminar compra
            </Button>
        }
    </>
    );
}