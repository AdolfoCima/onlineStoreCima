import React from 'react';
import { createContext, useState } from 'react';
import Swal from 'sweetalert2';


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

  const cartTotal = () => {
    return cart.reduce((acumulator, cartItem) => {
      return acumulator + cartItem.quantity * cartItem.item.price;
    }, 0);
  };

  const thanksForYourPurchase = (id) => {
    clearCart();
    return Swal.fire({
      text: 'orderId: ' + id,
      title: 'Gracias por su compra!',
      icon: 'success',
      timer: 3000,
    });
  };

  

  const context = {
    cart,
    setCart,
    clearCart,
    addToCart,
    removeItemFromCart,
    modifyItemQuantity,
    cartTotal,
    thanksForYourPurchase,
  };

  return <Provider value={context}>{children}</Provider>;
};
