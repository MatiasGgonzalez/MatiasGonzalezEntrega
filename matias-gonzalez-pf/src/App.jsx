import { useState } from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/carritoContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='COMPARTIENDO FELICIDAD' />}></Route>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting='COMPARTIENDO FELICIDAD' />}></Route>
            <Route path='/item/:idItem' element={<ItemDetailContainer greeting='COMPARTIENDO FELICIDAD' />}></Route>
            <Route path="/cart" element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='*' element={<h2>Sitio en construccion.</h2>}></Route>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>

    </>
  )
}

export default App
