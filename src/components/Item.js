import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({ name, img, price, id, description }) => {

    return (
        <div className="col" >
            <div className="card text-black bg-light mb-3">
                <img src={img} alt={name} className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>${price}</p>
                    <Link to={`/product/${id}`} className="btn btn-primary btn_ver_mas">Ver más</Link>
                </div>
            </div>
        </div>
    )
}