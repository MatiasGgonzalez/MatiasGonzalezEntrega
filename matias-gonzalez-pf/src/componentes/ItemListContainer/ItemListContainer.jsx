import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductos, getProductosPorCategoria } from '../../asynmock'
import { Container } from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams()

    useEffect(() => {
        const funcionManejadora = idCategoria ? getProductosPorCategoria : getProductos;
        funcionManejadora(idCategoria)
            .then(resp => setProductos(resp))
    }, [idCategoria])

    return (
        <body>
            <section>
                <Container fluid className='d-flex justify-content-center align-items-end   section__banner'>
                    <h2 className='pb-5 fs-20 text-light fw-bold'>{greeting}</h2>
                </Container>
            </section>
            <section>
                <ItemList productos={productos} />
            </section>
        </body>
    )
}

export default ItemListContainer