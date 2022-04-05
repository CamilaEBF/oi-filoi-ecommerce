import React, { useEffect, useMemo, useState } from "react";
import CartContext from "./CartContext";

export default function CacheProvider({defaultValue = [], children}) {
    const [cart, setCart] = useState(defaultValue);
    //cart = <{item, quantity}>[];

    useEffect(() => {
        console.log(cart, 'cart');
    }, [cart]);

    const value = useMemo(() => ({
        cart,
        addToCart: (product) => {
            let newCart = [...cart];    
            const index = newCart.find(element => element.item.title === product.item.title);
            console.log(index, 'index');
            console.log('product', product);
            if (index === undefined) {
                setCart([...cart, {item: product.item, quantity: product.quantity}]);
            }
        },
        removeFromCart: (product) => {
            setCart(cart.filter(p => p.item.id !== product.item.id));
        },
        emptyCart: () => {
            setCart([]);
        },
        total: cart.reduce((total, product) => +total + +product.item.price * +product.quantity, 0),
        quantity: cart.reduce((total, product) => +total + +product.quantity, 0),
    }), [cart]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}