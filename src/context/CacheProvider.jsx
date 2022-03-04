import React, { useState } from "react";
import CartContext from "./CartContext";

export default function CacheProvider({defaultValue = [], children}) {
    const [cart, setCart] = useState(defaultValue);
    //cart = <{item, quantity}>[];

    const addToCart = (product) => {
        let newCart = [...cart];    
        const index = newCart.findIndex(element => element.item.id === product.item.id);
        if (index === -1) {
            setCart([...cart, product]);
        }
    };

    const removeFromCart = (product) => {
        setCart(cart.filter(p => p.item.id !== product.item.id));
    }

    const emptyCart = () => {  setCart([]); };

    const total = cart.reduce((total, product) => total + product.item.price * product.quantity, 0);

    const quantity = cart.reduce((total, product) => total + product.quantity, 0);

    const context = {   
        cart,
        addToCart,
        removeFromCart,
        emptyCart,
        total,
        quantity
    };

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    );
}