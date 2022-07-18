import React, { useContext } from 'react'
import { CartItemCount } from './CartItemCount'
import { CartContext } from './CartContext'


export const CartItem = ({ name, img, price, id, description, stock, quantity }) => {

    const { removeItemFromCart, modifyItemQuantity } = useContext(CartContext)
    const onAdd = (quantity) => { modifyItemQuantity(id, quantity) }

    return (
        <div className="card mb-3 cardCart" >

            <div className="row g-0" >
                <div className="col-md-4">
                    <img src={img} alt={name}  className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>${price}</p>

                        <p>ID: {id}</p>
                    </div>
                    <CartItemCount quantity={quantity} onAdd={onAdd} stock={stock} />
                </div>
                <button type="button" className="btn btn-danger" onClick={() => { removeItemFromCart(id) }}>X</button>
            </div>
        </div>
    )
}