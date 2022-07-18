import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import React from 'react';

import './CartWidget.css';

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <Link to={'/cart'}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="fa-regular fa-cart-shopping btn btn-primary"
        />
      </Link>
      <span className="badge bg-secondary">
        {cart.reduce((acumulator, cartItem) => cartItem.quantity + acumulator,0)}
      </span>
    </header>
  );
};
