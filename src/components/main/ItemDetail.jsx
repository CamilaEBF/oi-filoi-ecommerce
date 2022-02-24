import { Card } from "react-bootstrap";

export default function ItemDetail({ item }) {
    return (<Card border="info" style={{ width: '18rem' }} className="p-1 m-auto">
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
    </Card>);
}