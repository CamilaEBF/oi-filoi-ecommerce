import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function BuyerForm(props) {
    return (<>
        <h2>Formulario de pedido</h2>
        <p>Para finalizar tu pedido, completa los siguientes datos:</p>
        <Form onSubmit={props.onSubmitOrder} >
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                <Form.Label column sm="2">
                    Nombre y Apellido
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="Juan Pérez" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhoneNumber">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="+54 9 123-4567-891" />
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit"> Enviar pedido </Button>
        </Form>
    </>);
}