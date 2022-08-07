import './ItemDetail.css';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { CartContext } from './CartContext';

export const ItemDetail = (props) => {
    const { name, img2, price, id, description, stock } = props;
    const { addToCart, cart } = useContext(CartContext);
    const [purchaseCompleted, setPurchaseCompleted] = useState(() =>{
        return cart.some((cartItem)=> {
            return cartItem.item.id == id
        } )
    });

    const onAdd = (quantityToAdd) => {
        setPurchaseCompleted(true);
        addToCart(props, quantityToAdd);
    };

    return (
        <div className=" detail-row container w-50 h-50 d-sm-flex">
            <div className="card d-sm-flex">
                <h1 className="card-title">{name}</h1>
                <img src={img2} alt={`${id}-${name}`} className="card-img-top " />
                <div className="card-body flex-col">
                    <p className="bold">${price}</p>
                    {/* <p>Stock: {stock}</p> */}
                    <p className="card-text">{description}</p>
                </div>

                <div className="itemCount">
                    {purchaseCompleted ? (
                        <Link to={'/cart'} className="btn btn-success ">
                            Ver Carrito
                        </Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={onAdd} />
                    )}
                </div>
            <Link to="/" type="button" className="btn btn-secondary">
                Volver
            </Link>
            </div>
        </div>
    );
};
