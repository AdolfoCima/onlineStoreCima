
import React from 'react';
import { createContext, useState } from 'react';


export const CartContext = createContext({});

const { Provider } = CartContext;

// const cartItem = [
//     {
//         item: {
//             nombre:
//             precio:
//         },
//         quantity: 
//     }
// ]

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
        clearCart,
        addToCart,
    };

    return <Provider value={context}>{children}</Provider>;
};
