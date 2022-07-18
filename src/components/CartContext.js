import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext({});

const { Provider } = CartContext;

export const CartProvider = ({ defoultValue = [], children }) => {
  const [cart, setCart] = useState(defoultValue);

  const clearCart = () => {
    setCart([]);
  };

  const removeItemFromCart = (id) => {
    setCart((cartState) =>
      cartState.filter((cartItem) => cartItem.item.id != id)
    );
  };

  const addToCart = (item, quantity) => {
    console.log(item);

    setCart([
      ...cart,
      {
        item: item,
        quantity: quantity,
      },
    ]);
  };

  const modifyItemQuantity = (id, quantity) => {
    setCart((cartState) =>
      cartState.map((cartItem) => {
        if (cartItem.item.id == id) {
          cartItem.quantity = quantity;
        }
        return cartItem;
      })
    );
  };
  const context = {
    cart,
    setCart,
    clearCart,
    addToCart,
    removeItemFromCart,
    modifyItemQuantity,
  };

  return <Provider value={context}>{children}</Provider>;
};
