import React, { useContext } from 'react';
import { CartItem } from './CartItem';
import { CartContext } from './CartContext';
import Swal from 'sweetalert2';

export const CartItemList = () => {
    const { cart, clearCart } = useContext(CartContext);

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
            <button className="btn btn-success" onClick={() =>{clearCart(); return  Swal.fire({
                title: 'Gracias por su compra!',
                icon: 'warning',
                timer: 2000,
            });}}>COMPRAR</button>
        </div>
    );
};
