import { Routes, Route } from 'react-router-dom'
import { Naybar } from '../components/Naybar.jsx'
import Login from '../page/Login.jsx'
import Home from '../page/Home.jsx'
import Products from '../page/Products.jsx'
import Envios from '../page/Envios.jsx'
import Promociones from '../page/Promociones.jsx'


export function MyRouter () {
  return (
    <>
    <Naybar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/envios' element={<Envios/>}/>
        <Route path='/promociones' element={<Promociones/>}/>
      </Routes>
    </>
  )
}
