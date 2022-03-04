import React from "react";
import "./CartItem.scss";

export default function CartItem({ product, removeFromCart }) {
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={product.item.image} alt={product.item.name} />
      </div>
      <div className="cart-item-info">
        <h3>{product.item.name}</h3>
        <p>{product.item.description}</p>
        <p>${product.item.price}</p>
        <button onClick={() => removeFromCart(product)}>Eliminar</button>
      </div>
      <div>
        <p>Cantidad: {product.quantity}</p>
        <p>Subtotal: {product.quantity * product.item.price}</p>
      </div>
    </div>
  );
}