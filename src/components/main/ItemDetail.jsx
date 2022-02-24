import { Button, Card } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

export default function ItemDetail({ item }) {
    return (<Card style={{ width: '20rem' }} className="p-1 m-auto">
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
                Precio: {item.price}
            </Card.Footer>
    </Card>);
}