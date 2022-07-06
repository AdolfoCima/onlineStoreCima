import './ItemDetailContainer.css';
import { data } from '../data/data'
import React, { useEffect, useState } from 'react';
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { itemId } = useParams();

    console.log(itemId);

    useEffect(() => {
    setIsLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = data.find((item) => item.id === itemId);

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setProduct(res);
      })
      .finally(() => setIsLoading(false));
    }, [itemId]);

    return isLoading ? <h2>Loading...</h2> : <ItemDetail {...product} />;
 
}


// const [details, setDetails] = useState([])

// const getDetails = () => {
    
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             data.length > 0 ? resolve( data ) : reject("No hay datos")
//         }, 2000)
//     )
// }

// useEffect(() => {
//     getDetails()
//         .then(res => setDetails(res))
//         .then(err => console.log(err))
// }, [])

// return (
//     <>
//         <DetailList data={details} />
//     </>
// )