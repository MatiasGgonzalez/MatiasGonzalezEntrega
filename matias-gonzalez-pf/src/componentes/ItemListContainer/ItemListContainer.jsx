import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import { getProductos, getProductosPorCategoria } from '../../asynmock'
import { Container } from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'

import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../service/config'

//colection lo voy a usar para una coleccion de firestore(ejemplo : "inventario")
//getDocs me trae todos los documentos de una coleccion.    
// query la voy a usar para hacer consultas a la base de datos.
//where la voy a usar para hacer un filtrado en la consuta (por ej : traer productos de una categoria, de tal precio).

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams()
    /*
    useEffect(() => {
        const funcionManejadora = idCategoria ? getProductosPorCategoria : getProductos;
        funcionManejadora(idCategoria)
            .then(resp => setProductos(resp))
    }, [idCategoria])
    */
    useEffect(() => {
        const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCategoria", "==", idCategoria)) : collection(db, "inventario");
        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc  => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(nuevosProductos)
            })
            .catch(error => console.log(error))
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