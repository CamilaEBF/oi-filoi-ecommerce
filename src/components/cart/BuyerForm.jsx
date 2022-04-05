import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function BuyerForm(props) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [disableSubmit, setDisableSubmit] = useState(true);

    useEffect(
        () => {
            if (email1 === email2 && name !== "" && phone !== "" && email1 !== "") {
                setDisableSubmit(false);
            } else {
                setDisableSubmit(true);
            }
        }, [email1, email2, name, phone]
    );

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleChangeEmail1 = (event) => {
        setEmail1(event.target.value);
    };

    const handleChangeEmail2 = (event) => {
        setEmail2(event.target.value);

        if (email1 !== email2 && email1 !== "") {
            setDisableSubmit(true);
        }
    };

    return (<>
        <h2>Formulario de pedido</h2>
        <p>Para finalizar tu pedido, completa los siguientes datos:</p>
        <Form onSubmit={props.onSubmitOrder} >
            <Form.Group as={Row} className="mb-3" controlId="name">
                <Form.Label column sm="2">
                    Nombre y Apellido
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext placeholder="Juan Pérez" onChange={($event) => handleChangeName($event)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="phone">
                <Form.Label column sm="2">
                    Número de teléfono
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext placeholder="+54 9 123-4567-891" onChange={($event) => handleChangePhone($event)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="email">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext placeholder="ejemplo@gmail.com" onChange={($event) => handleChangeEmail1($event)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="email2">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext placeholder="ejemplo@gmail.com" onChange={($event) => handleChangeEmail2($event)}/>
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={disableSubmit}> Enviar pedido </Button>
        </Form>
    </>);
}