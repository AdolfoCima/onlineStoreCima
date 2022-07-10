
import React from 'react';
import { createContext, useState } from 'react';


export const CartContext = createContext({});

const { Provider } = CartContext;

export const CartProvider = ({ defoultValue = [], children }) => {
    const [cart, setCart] = useState(defoultValue);

    const clearCart = () => {
        setCart([]);
    };

    const addToCart = (item, quantity) => {
        console.log(item)
        setCart(
            [
                ...cart,
                {
                    item: item,
                    quantity: quantity,
                }
            ]
        )

    }

    const context = {
        cart,
        clearCart,
        addToCart,
    };

    return <Provider value={context}>{children}</Provider>;
};
