import React, { useContext } from 'react';
import { CartItem } from './CartItem';
import { CartContext } from './CartContext';
import { CartForm } from './CartForm';
import { Link } from 'react-router-dom';


export const CartItemList = () => {
    const { cart, cartForm } = useContext(CartContext);

    return (
        // Item = ({ name, image, price, id }) => {
        <div className="container">
            <div className="row justify-content-evenly">
                {cart.map((cartItem) => (
                    <CartItem
                        id={cartItem.item.id}
                        key={cartItem.item.id}
                        name={cartItem.item.name}
                        img={cartItem.item.img2}
                        price={cartItem.item.price}
                        description={cartItem.item.description}
                        stock={cartItem.item.stock}
                        quantity={cartItem.quantity}
                    />
                ))}
            </div>
            <div>
                <h2>
                    Total: $
                    {cart.reduce((acumulator, cartItem) => {
                        return acumulator + cartItem.quantity * cartItem.item.price;
                    }, 0)}

                </h2>
            </div>
            <Link to={'/CartForm'} type='button'  className="btn btn-success" 
            >Finalizar compra</Link>
        </div>
    );
};
