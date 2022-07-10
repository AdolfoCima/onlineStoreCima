import './ItemDetail.css';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { CartContext } from './CartContext';

export const ItemDetail = (props) => {
    const { name, img2, price, id, description, stock } = props;
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    const { addToCart } = useContext(CartContext);

    const onAdd = (quantityToAdd) => {
        setPurchaseCompleted(true);
        addToCart(props, quantityToAdd);
    };

    return (
        <div className="card mb-3 detail-row container">
            <div className="card">
                <h1 className="card-title">{name}</h1>
                <img src={img2} alt={`${id}-${name}`} className="card-img-top " />
                <div className="card-body flex-col">
                    <p className="bold">${price}</p>
                    {/* <p>Stock: {stock}</p> */}
                    <p className="card-text">{description}</p>
                </div>

                {/* <ItemCount stock={stock} /> */}

                <div className="itemCount">
                    {purchaseCompleted ? (
                        <Link to={'/cart'} className="btn btn-success ">
                            Finalizar Compra
                        </Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={onAdd} />
                    )}
                </div>
            </div>
            <Link to="/" type="button" className="btn btn-secondary">
                Volver
            </Link>
        </div>
    );
};
