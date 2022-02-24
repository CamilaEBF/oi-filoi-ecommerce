import { Button } from "bootstrap";
import { Card, Col } from "react-bootstrap";


export default function Item(props) {
    return (<Col>
        <Card key={props.id} style={{ width: '20rem' }} className="p-1 m-auto">
            <Card.Img variant="top" src={props.pictureUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
            <Card.Footer>
                Ver más ...
            </Card.Footer>
        </Card>
    </Col>);
}