import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Item(props) {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/item/${props.id}`;
        navigate(path);
    }
    return (<Col>
        <Card key={props.id} style={{ width: '20rem' }} className="p-1 m-auto">
            <Card.Img variant="top" src={props.pictureUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button onClick={routeChange} variant="primary" size="sm" >
                    Ver más ...
                </Button>
            </Card.Body>
        </Card>
    </Col>);
}