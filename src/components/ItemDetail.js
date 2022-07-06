import './ItemDetail.css'
import React from 'react'
import { Link } from 'react-router-dom';

export const ItemDetail = ({
    name,
    img2,
    price,
    id,
    description,
}) => {

    return (
        <div className="card mb-3 detail-row container"  >
            
            <div className="card" >
                <h1 className="card-title">{name}</h1>
                <img src={img2} alt={`${id}-${name}`} className="card-img-top " />
                <div className="card-body flex-col">
                    <p>${price}</p>
                    <p className='card-text'>{description}</p>
                    <Link to="/" className="btn btn-secondary btn_ver_mas">Volver</Link>
                    <button className="btn btn-primary btn_ver_mas">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}