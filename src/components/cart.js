import './Cart.css';

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { CartContext } from './CartContext';
import { CartItem } from './CartItem';
import { CartItemList } from './CartItemList';

export const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="container">
      {cart.length > 0 ? (
        <>
          <h1>CARRITO</h1>
          <CartItemList />
        </>
      ) : (
        <h1>No hay productos en el carrito</h1>
      )}
      <Link to="/" type="button" className="btn btn-secondary boton-volver">
        Volver
      </Link>
    </div>
  );
};


