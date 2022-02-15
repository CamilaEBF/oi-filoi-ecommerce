import {Col, Container, Row} from "react-bootstrap";

export default function ItemListContainer(props) {
    return (<Container>
        <Row className="justify-content-md-center align-middle">
            <Col xs lg="4">{props.greeting}</Col>
        </Row>
    </Container>);
}