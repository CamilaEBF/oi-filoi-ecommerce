import { useContext, useState } from "react";
import { Button, Image, Row, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./ItemDetail.scss";

export default function ItemDetail({ item }) {
    let navigate = useNavigate();
    const [count, setCount] = useState(0);
    const cartContext = useContext(CartContext);

    const onAdd = (count) => {
        cartContext.addToCart({ item, quantity: count });
        setCount(count);
    };

    const routeChange = () => {
        navigate("/cart");
        console.log("Se ha cambiado de ruta.");
    }

    return (<Row className="detail-container">
        <Col md={4}>
            <Image src={item.pictureUrl} fluid className='card-image-container' />
        </Col>
        <Col md={8} className="item-details">
            <div className="item-title">{item.title}</div>
            <p>{item.description}</p>
            <p className="item-price">$ {item.price}</p>
            <Row className="m-2 justify-content-center">
                <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
                {count > 0 &&
                    <Button className="m-2" variant="secondary" onClick={routeChange}>
                        Ver carrito
                    </Button>
                }
            </Row>

        </Col>
    </Row>
    );
}