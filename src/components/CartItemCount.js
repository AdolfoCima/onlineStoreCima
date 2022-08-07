import './CartItemCount.css';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import React from 'react';

export const CartItemCount = ({ stock, quantity = 0, onAdd }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(quantity);

    const addHandler = () => {
        console.log('se esta sumando');
        if (quantityToAdd < stock) {
            onAdd(quantityToAdd + 1);
            setQuantityToAdd(quantityToAdd + 1);
        } else {
            console.log(`Alcanzaste el maximo de ${stock} unidades disponibles!`);
            Swal.fire({
                title: 'Atención!',
                text: `Alcanzaste el maximo de ${stock} unidades disponibles!`,
                icon: 'warning',
                timer: 2000,
            });
        }
    };

    const removeHandler = () => {
        console.log('se esta restando');
        if (quantityToAdd > 0) {
            onAdd(quantityToAdd - 1);
            setQuantityToAdd(quantityToAdd - 1);
        }
    };

    return (
        <>
            <p className="uDisp">
                {stock > 1
                    ? ` ${stock} unidades disponibles`
                    : `${stock}  unidad disponible`}{' '}
            </p>
            <div className="flex-row">
                <button
                    type="button"
                    className="btn btn-dark btn_ver_mas"
                    onClick={removeHandler}
                >
                    -
                </button>
                <h3>{quantityToAdd}</h3>
                <button
                    type="button"
                    className="btn btn-dark btn_ver_mas"
                    onClick={addHandler}
                >
                    +
                </button>
            </div>
        </>
    );
};
