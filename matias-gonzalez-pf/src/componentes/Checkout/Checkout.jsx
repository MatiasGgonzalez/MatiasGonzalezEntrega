

import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import { db } from '../../service/config'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import './Checkout.css'
const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailconfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);
    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailconfirmacion) {
            setError("Por favor complete todos los campos")
            return;
        }


        if (email != emailconfirmacion) {
            setError("Los e-mails no coinciden, vuelva a intentarlo")
            return;
        }


        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };


        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })

            })
        )
            .then(() => {

                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.log("Error al cancelar la orden, vuelva a intentarlo.")
                        setError("Error al cancelar la orden. Vuelva a intentarlo.")
                    });


            })
            .catch((error) => {
                console.log("No se pudo actualizar el stock ", error)
                setError("No se pudo actualizar el stock.")
            })
    }

    return (

        <div>
            <h2 className='tituloCheckout'>Checkout</h2>
            <form onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <img src={producto.item.img} alt="" />
                            <p>{producto.item.nombre} x {producto.cantidad}</p>
                            <p>Precio: {producto.item.precio}</p>
                            
                            <hr />
                        </div>
                    ))
                    
                }
                <p>Cantidad total : {total}</p>
                <hr />
                <div className="formGroup">
                    <label htmlFor=""> Nombre : </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="formGroup">
                    <label htmlFor=""> Apellido : </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="formGroup">
                    <label htmlFor=""> Telefono : </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="formGroup">
                    <label htmlFor=""> E-Mail : </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="formGroup">
                    <label htmlFor=""> Reingrese su E-Mail : </label>
                    <input type="text" value={emailconfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }
                <button type='submit'>Finalizar compra</button>
            </form>
            {
                ordenId && (
                    <strong>¡Gracias por tu compra! Tu numero de orden es : {ordenId}</strong>
                )
            }
        </div>
    )
}

export default Checkout