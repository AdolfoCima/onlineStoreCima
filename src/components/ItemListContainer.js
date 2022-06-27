import './ItemListContainer.css';
import { productList } from '../data/asyncMock'
import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';

function ItemListContainer() {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) =>
            setTimeout(() => {
                productList.length > 0 ? resolve(productList) : reject("No hay datos")
            }, 2000)
        )
    }

    //Utilizando Promise
    useEffect(() => {
        getProducts()
            .then(res => setProducts(res))
            .then(err => console.log(err))
    }, [])

    return (
        <>
            <ItemList productList={products} />
        </>
    )
}

export default ItemListContainer;