import React from 'react'
import './ItemList.css'
import Item from '../Item.js/Item'
import { Container, Row, Col } from 'react-bootstrap';
const ItemList = ({ productos }) => {
  return (
    <Container className="custom__container">
    <Row className="my-3">
      {productos.map((producto, index) => (
        <Col lg={4} key={producto.id} className={(index + 1) % 3 === 0 ? 'mb-3' : ''}>
          <Item {...producto} />
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default ItemList