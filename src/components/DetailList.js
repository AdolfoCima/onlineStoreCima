import React from 'react'
import { ItemDetail } from './ItemDetail'

export const DetailList = ({ productList }) => {

    console.log('productList', productList)

    return (
        // Item = ({ name, image, price, id }) => {
        <div className='container'>
            <div className="row justify-content-evenly">
                {productList.map((product) => <ItemDetail key={product.id} name={product.name} image={product.img2} price={product.price} description={product.description} />)}
            </div>
        </div>

    )
}