import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import { Button, Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../../service/config';
import './CartItem.css'
const CartItem = ({ item, cantidad}) => {
    const { eliminarProducto } = useContext(CarritoContext)
    console.log(item)

    const [img,setImg] = useState("")
    
    useEffect(()=>{
        const docNuevo = doc(db, "inventario", item.id);
        getDoc(docNuevo)
        .then(res => {
            const data = res.data();
            const dataImg = {...data }
            setImg(dataImg.img)
        })
        .catch(error => console.log(error))
    },[item])
 

    return (
        <div className='containerCartItem'>
            <Card bg="dark" text="light" className='border-0 w-40'>
                <Card.Body className='text-center body__card__custom'>
                    <Card.Img variant="top" src={img} className='imgCart' />
                    <Card.Title>{item.nombre}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='card__list' >Precio : {item.precio} </ListGroup.Item>
                        <ListGroup.Item className='card__list'>Cantidad : {cantidad}</ListGroup.Item>
                    </ListGroup>
                    <Button onClick={() => eliminarProducto(item.id)} variant="light">Eliminar producto</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CartItem