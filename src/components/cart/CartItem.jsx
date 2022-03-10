import React from "react";
import { Image } from "react-bootstrap";
import "./CartItem.scss";
import { Button } from "react-bootstrap";

export default function CartItem({ product, removeFromCart }) {
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <Image src={product.item.pictureUrl} alt={product.item.name} thumbnail />
      </div>
      <div className="cart-item-info">
        <h4>{product.item.title}</h4>
        <p>${product.item.price}</p>
      </div>
      <div className="cart-item-quantity">
        <p>Cantidad: {product.quantity}</p>
        <p>Subtotal: ${product.quantity * product.item.price}</p>
      </div>
      <div className="cart-item-actions">
        <Button variant="secondary" onClick={() => removeFromCart(product)}>Eliminar</Button>
      </div>
    </div>
  );
}