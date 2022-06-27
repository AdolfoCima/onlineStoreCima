import React from 'react'
import { Item } from './Item'

export const ItemList = ({ productList }) => {

    console.log('productList', productList)

    return (
        // Item = ({ name, image, price, id }) => {
        <div className='container'>
            <div className="row justify-content-evenly">
                {productList.map((product) => <Item key={product.id} name={product.name} image={product.img} price={product.price} />)}
            </div>
        </div>

    )
}