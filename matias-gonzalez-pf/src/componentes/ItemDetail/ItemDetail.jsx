import React, { useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, nombre, precio, img,  stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad = (cantidad)=>{
        setAgregarCantidad(cantidad)
        console.log(`productos agregados : ${cantidad}`)
    }
    return (
        <>
            <Container>
                <Card bg="dark" text="light" className='border-0 w-40'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='text-center body__card__custom'>
                        <Card.Title>{nombre}</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='card__list' >Precio : {precio} </ListGroup.Item>
                            <ListGroup.Item className='card__list'>ID : {id}</ListGroup.Item>
                        </ListGroup>
                        {

                        }
                        {
                            agregarCantidad > 0 ? (<Link to = "/cart">Terminar compra</Link>) :  (<ItemCount valorInicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                        }
                    </Card.Body>
                </Card>
            </Container>

        </>

    )
}

export default ItemDetail