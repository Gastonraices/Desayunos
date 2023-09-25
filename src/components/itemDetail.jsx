import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./itemCount"
import { useCartContext } from "../contex/Provider"


const ItemDetail = ({data}) => {

  //const [goCart, setGoCart] = useState([])

  const {addItem} = useCartContext()

  const onAdd= (quantity) =>{
    console.log(`compraste ${quantity} productos`)
    addItem(data, quantity)
  }

  return (
    <div>
        <img src={data.imagen} width="80"/>
        <p>titulo:{data.titulo}</p>
        <p>{data.precio}</p>
        <p>{data.categoria}</p>
        <ItemCount initial={0} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail 
