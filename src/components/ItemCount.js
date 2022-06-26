import './ItemCount.css';
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

function ItemCount({ stock }) {
    const [num, setNum] = useState(0);

    useEffect(() => {
        if (num == stock - 2) {
            Swal.fire({
                title: 'Atención!',
                text: 'Quedan pocas unidades disponibles!',
                icon: 'warning',
                timer: 2000
            })
        }

    }, [num])

    const addition = () => {
        if (num < stock) {
            setNum(num + 1)
        }

        else {
            Swal.fire({
                title: 'Atención!',
                text: `Alcanzaste el maximo de ${stock} unidades disponibles!`,
                icon: 'warning',
                timer: 2000
            })
        }
    }

    const subtraction = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }

    const reset = () => {
        setNum(0)
    }

    return (
        <>
            <h3 style={{ marginLeft: 20 }}>{num}</h3>
            <p>{stock > 1 ? ` ${stock} unidades disponibles` : `${stock}  unidad disponible`} </p>
            <button onClick={subtraction}>Restar</button>
            <button onClick={addition}>Sumar</button>
            <button onClick={reset}>Reiniciar</button>
        </>
    )
}

export default ItemCount;