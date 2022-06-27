import React from 'react'

export const Item = ({ name, image, price, id }) => {

    return (
        <div className="col" >
            <div className="card cardStyle">
                <img src={image} alt={name} className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{price}</p>
                    <button className="btn btn-primary btn_ver_mas">Ver más</button>
                </div>
            </div>
        </div>
    )
}