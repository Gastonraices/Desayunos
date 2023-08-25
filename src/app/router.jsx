
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layaout from './layaout'
import Home from '../components/Home'
import Sanwiches from '../components/sanwiches'
import ItemDetailContainerSanwich from '../components/itemDetailContainerSanwich'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layaout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='categoria/:categoriaId' element={<Sanwiches/>}/>
                <Route path='detalle/:id' element={<ItemDetailContainerSanwich/>}/>
            </Route>
        </Routes>

    </BrowserRouter>
  )
}

export default Router