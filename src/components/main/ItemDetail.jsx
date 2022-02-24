import { Button, Card } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

export default function ItemDetail({ item }) {
    return (<Card key={props.key} style={{ width: '20rem' }} className="p-1 m-auto">
        <Card.Img variant="top" src={props.pictureUrl} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Footer>
                Precio: {props.price}
            </Card.Footer>
        </Card.Body>
    </Card>);
}