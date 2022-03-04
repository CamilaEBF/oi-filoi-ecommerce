import React from "react";

const CartContext = React.createContext({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    emptyCart: () => {},
    total: 0,
    quantity: 0
});

export default CartContext;