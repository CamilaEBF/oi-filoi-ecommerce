import {Button, Col, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {FaMinusSquare, FaPlusSquare} from "react-icons/fa";

export default function ItemCount(props) {
  const [count, setCount] = useState(props.initial);
  const [flagNoStock, setFlagNoStock] = useState(false);
  const [flagNoSubstract, setFlagNoSubstract] = useState(true);


  useEffect(() => {
    let fNoStock = props.stock < count + 1 ? true : false;
    let fNoSubstract = count < 2 ? true : false;
    setFlagNoStock(fNoStock);
    setFlagNoSubstract(fNoSubstract);
  }, [count, props.stock]);

  const handleOnAddition = () => {
    setCount(parseInt(count, 10) + 1);
  };

  const handleOnSubtract = () => {
    setCount(count - 1);
  };

  const handleOnAdd = () => {
    console.log(`Se agregó al carrito ${count} del producto.`)
  };

  return (<>
    <Row sm={3} className="g-3">
      {!flagNoSubstract &&
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
      <Button className="g-3" onClick={handleOnAdd}>
        <span> Agregar al carrito </span>
      </Button>
    </Row>
  </>);
}