import React from 'react'
import './Item.css'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <Card bg="dark" text="light" className='border-0'>
            <Card.Img variant="top" src={img} />
            <Card.Body className='text-center body__card__custom'>
                <Card.Title>{nombre}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className='card__list' >Precio : {precio} </ListGroup.Item>
                    <ListGroup.Item className='card__list'>ID : {id}</ListGroup.Item>
                    <ListGroup.Item className='card__list'>Stock : {stock}</ListGroup.Item>
                </ListGroup>
                <Button as= {Link} to = {`/item/${id}`}variant="light">+ Info</Button>
            </Card.Body>
        </Card>
    )
}

export default Item