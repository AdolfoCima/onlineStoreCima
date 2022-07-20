import './ItemListContainer.css';
import { data } from '../data/data';
import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
/* import de useParams para traer el parametro de la URL */
import { useParams } from 'react-router-dom';

import {
    getFirestore,
    doc,
    getDoc,
    collection,
    getDocs,
    query,
    where,
} from 'firebase/firestore';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    //loading...
    const [isLoading, setIsLoading] = useState([true]);

    const { catId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        // const getItems = new Promise((resolve) => {
        //     setTimeout(() => {
        //         /*si catId tiene datos filtra, sino trae todos los productos del array */
        //         const myData = catId
        //             ? data.filter((item) => item.category === catId)
        //             : data;

        //         resolve(myData);
        //     }, 1000);
        // });

        // getItems
        //     .then((res) => {
        //         setItems(res);
        //     })
        //     .finally(() => setIsLoading(false));
        const dataBase = getFirestore();
        const q = catId ? query(collection(dataBase, 'ItemCollection'), where('category', '==', catId)) : query(collection(dataBase, 'ItemCollection'))

        getDocs(q).then((snapshot) => {
            console.log(snapshot)
            setItems(snapshot.docs.map((doc) => doc.data()));
            setIsLoading(false);
        });
    }, [catId]);

    return isLoading ? (
        <h2>Loading...</h2>
    ) : (
        <>
            <ItemList items={items} />
        </>
    );
};
