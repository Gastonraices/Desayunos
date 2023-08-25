import  { useEffect, useState } from 'react'
import ItemDetail from './itemDetail'
import { promesa } from '../app/api'
import { useParams } from 'react-router-dom'

export const ItemDetailContainerSanwich = () => {

    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() =>{
        promesa().then((data) =>{
            setProducto(data.filter(producto => producto.id == parseInt(id)))
        })
    },[id])

  return (
    <div>
        {
            producto.map((data, id) =>(
            <ItemDetail data={data} key={id}/>
            ))
        }
    </div>
  )
}


export default ItemDetailContainerSanwich
