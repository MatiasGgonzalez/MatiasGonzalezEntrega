import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <>
                <h1>No hay productos en el carrito.</h1>
                <Link to="/">Ver mas productos.</Link>
            </>
        )
    }
    return (
        <div className='contenedorCarrito'>
            <h2 className='tituloCarrito'>CARRITO</h2>
            {carrito.map(producto => <CartItem key ={producto.id } {...producto}/>)}
            <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            <Link to="/checkout">Finalizar compra</Link>
        </div>
    )
}

export default Cart