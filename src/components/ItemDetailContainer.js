import './ItemDetailContainer.css';
import { productList } from '../data/asyncMock'
import React, { useEffect, useState } from 'react';
import { DetailList } from './DetailList';


function ItemDetailContainer() {

    const [details, setDetails] = useState([])

    const getDetails = () => {
        
        return new Promise((resolve, reject) =>
            setTimeout(() => {
                productList.length > 0 ? resolve( productList ) : reject("No hay datos")
            }, 2000)
        )
    }
    
    useEffect(() => {
        getDetails()
            .then(res => setDetails(res))
            .then(err => console.log(err))
    }, [])

    return (
        <>
            <DetailList productList={details} />
        </>
    )
}

export default ItemDetailContainer;