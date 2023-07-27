import React, { useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/carritoContext.jsx';
import './ItemDetail.css'


const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0)
    const { agregarProducto } = useContext(CarritoContext)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        console.log(`productos agregados : ${cantidad}`)
        const item = { id, nombre, precio }
        agregarProducto(item, cantidad)
    }
    return (
        <Card bg="dark" text="light" className='border-0 w-40 contenedorCart' >
            <h3 className='titleItem'>DETALLES DEL PRODUCTO</h3>
            <Card.Body className='text-center body__card__custom'>
                <Card.Img variant="top" src={img} className='imgDetail' />
                <Card.Title className='cardTitle'>{nombre}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className='card__list' >Precio : {precio} </ListGroup.Item>
                    <ListGroup.Item className='card__list'>ID : {id}</ListGroup.Item>
                    <ListGroup.Item className='card__list'>Stock : {stock}</ListGroup.Item>
                </ListGroup>
                {

                }
                {
                    agregarCantidad > 0 ? (<Link to="/cart">Terminar compra</Link>) : (<ItemCount valorInicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </Card.Body>
        </Card>
    )
}

export default ItemDetail