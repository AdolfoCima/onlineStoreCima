import './ItemListContainer.css';
import { data } from '../data/data'
import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
/* import de useParams para traer el parametro de la URL */
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    //loading... 
    const [isLoading, setIsLoading] = useState([true]);

    const { catId } = useParams();

    useEffect(() => {

        setIsLoading(true);
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                /*si catId tiene datos filtra, sino trae todos los productos del array */
                const myData = catId
                    ? data.filter((item) => item.category === catId)
                    : data;

                resolve(myData);
            }, 1000);
        });

        getItems
            .then((res) => {
                setItems(res);
            })
            .finally(() => setIsLoading(false));
    }, [catId]);

    return isLoading ? (
        <h2>Loading...</h2>
    ) : (

        <>
            <ItemList items={items} />
        </>
    )
}

