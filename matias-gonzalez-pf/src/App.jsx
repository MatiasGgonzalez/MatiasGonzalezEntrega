import { useState } from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='COMPARTIENDO FELICIDAD'/>}></Route>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting='COMPARTIENDO FELICIDAD'/>}></Route>
          <Route path='/item/:idItem' element={<ItemDetailContainer greeting='COMPARTIENDO FELICIDAD'/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
