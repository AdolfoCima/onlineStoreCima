import './ItemDetail.css'
import React from 'react'

export const ItemDetail = ({ name, image, price, id, description }) => {

    return (
        <div className="col" >
            <h3>DETALLE</h3>
            <div className="card">
                <h5 className="card-title">{name}</h5>
                <img src={image} alt={name} className='card-img-top' />
                <div className="card-body">
                    <p>${price}</p>
                    <p className='card-text'>{description}</p>
                    <button className="btn btn-secondary btn_ver_mas">Volver</button>
                    <button className="btn btn-primary btn_ver_mas">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}