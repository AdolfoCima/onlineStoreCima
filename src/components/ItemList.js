import React from 'react'
import { Item } from './Item'

export const ItemList = ({ items }) => {

    return (
        // Item = ({ name, image, price, id }) => {
        <div className='container'>
            <div className="row justify-content-evenly row-cols-sm-3 g-3">
                {items?.map((item) => (
                    <Item {...item} key={item.id} />
                ))}
            </div>
        </div>

    )
}