import React from 'react'
import { useState, useEffect } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/config'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const { idItem } = useParams()
  useEffect(() => {
    const nuevoDoc = doc(db, "inventario", idItem);
    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data }
        setProducto(nuevoProducto)
      })
      .catch(error => console.log(error))
  }, [idItem])

  return (
    <div className='contenedorDetail'>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer