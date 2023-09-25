import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layaout from './layaout'
import Home from '../components/Home'
import Sanwiches from '../pages/sanwiches'
import ItemDetailContainerSanwich from '../pages/itemDetailContainerSanwich'
import Cart from '../pages/cart'
import Provider from '../contex/Provider'
import CompraTerminada from '../pages/compraTerminada'

const Router = () => {
  return (
    <Provider>
    <BrowserRouter>
        <Routes>
            <Route element={<Layaout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='categoria/:categoriaId' element={<Sanwiches/>}/>
                <Route path='detalle/:id' element={<ItemDetailContainerSanwich/>}/>
                <Route path='cart/' element={<Cart/>}/>
                <Route path='terminado/' element={<CompraTerminada/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default Router