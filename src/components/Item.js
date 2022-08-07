import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ name, img, price, id, description,stock }) => {
    

    return (
        <div className="wrapper " >
            <div className="card text-black bg-light xsm-3 h-100">
                <div >
                <img src={img} alt={name} className='card-img-top ' />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>${price}</p>
                    <p>Stock: {stock}</p>
                    <Link to={`/product/${id}`} className="btn btn-primary btn_ver_mas">Ver más</Link>
                </div>
                
            </div>
        </div>
    )
}