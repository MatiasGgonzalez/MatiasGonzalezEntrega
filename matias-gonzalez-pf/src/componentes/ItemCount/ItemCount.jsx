import { useState, useEffect } from "react"

const ItemCount = ({ valorInicial, stock, funcionAgregar }) => {
    const [contador, setcontador] = useState(valorInicial);

    const incrementar = () => {
        contador < stock ? setcontador(contador + 1) : ""
    }

    const decrementar = () => {
        contador > valorInicial ? setcontador(contador - 1) : ""
    }

    return (
        <>
            <div>
                <button onClick={incrementar}>+</button>
                <strong>{contador}</strong>
                <button onClick={decrementar}>-</button>
            </div>
            <button onClick={()=> funcionAgregar(contador)}>Agregar al carrito</button>
        </>

    )
}

export default ItemCount
