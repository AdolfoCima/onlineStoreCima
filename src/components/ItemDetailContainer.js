import './ItemDetailContainer.css';
import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  where,
  query,
  getFirestore,
} from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { itemId } = useParams();

  console.log(itemId);

  useEffect(() => {
    setIsLoading(true);
    const dataBase = getFirestore();
    const q = query(collection(dataBase, 'ItemCollection'), where('id', '==', itemId));
    getDocs(q).then((res) => {
      setProduct(res.docs[0].data())
    })
      .finally(() => setIsLoading(false));
  }, [itemId]);

  return isLoading ? <h2>Loading...</h2> : <ItemDetail {...product} />;
};
