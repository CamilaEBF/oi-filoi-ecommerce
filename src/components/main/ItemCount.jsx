import {Button, Col, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {FaMinusSquare, FaPlusSquare} from "react-icons/fa";

export default function ItemCount(props) {
  const [count, setCount] = useState(props.initial);
  const [flagNoStock, setFlagNoStock] = useState(false);
  const [flagNoSubtract, setFlagNoSubtract] = useState(true);


  useEffect(() => {
    let fNoStock = props.stock < count + 1;
    let fNoSubtract = count < 2;
    setFlagNoStock(fNoStock);
    setFlagNoSubtract(fNoSubtract);
  }, [count, props.stock]);

  const handleOnAddition = () => {
    setCount(parseInt(count, 10) + 1);
  };

  const handleOnSubtract = () => {
    setCount(count - 1);
  };

  return (<>
    <Row sm={3} className="justify-content-center align-content-center mt-3">
      {!flagNoSubtract &&
      <Col>
        <Button onClick={handleOnSubtract}>
          <FaMinusSquare/>
        </Button>
      </Col>
      }
      <Col>
        <span>{count}</span>
      </Col>
      {!flagNoStock &&
      <Col>
        <Button onClick={handleOnAddition}>
          <FaPlusSquare/>
        </Button>
      </Col>
      }
    </Row>
    <Row>
      <Button className="g-3" onClick={() => props.onAdd(count)}>
        <span> Agregar al carrito </span>
      </Button>
    </Row>
  </>);
}