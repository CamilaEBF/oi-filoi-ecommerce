import { useContext } from "react";
import CartItem from "./CartItem";
import "./Cart.scss";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Cart() {
    const cartContext = useContext(CartContext);

    const cartItems = cartContext.cart.map(product => (
        <CartItem
            key={`cart-item-${product.item.id}`}
            product={product}
            removeFromCart={cartContext.removeFromCart}
        />
    ));

    const cartEmpty = (<>
        <div className="cart-empty">
            <h3>Tu carrito está vacío :( </h3>
        </div>
        <div>
            <Link to="/">
                <Button variant="secondary" className="button-back">
                    Volver a la tienda
                </Button>
            </Link>
        </div>
    </>
    );


    const cartContent = cartContext.cart.length ? cartItems : cartEmpty;

    const cartTotal = (
        <div className="cart-total">
            <h3>Total: ${cartContext.total}</h3>
            <Button onClick={cartContext.emptyCart}>Eliminar {cartContext.quantity} productos del carrito</Button>
        </div>
    );

    const cart = (<div className="cart">
        <h2>Carrito</h2>
        {cartContent}
        {cartTotal}
    </div>
    );


    return (
        <div className="cart-container">
            {cart}
        </div>
    );
}