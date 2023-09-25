import { Link } from "react-router-dom"
import { useState } from "react"


const itemCount = ({initial, onAdd}) => {

  const [count, setCount]= useState(initial)
  

  const incrementar = () =>{
    setCount(count + 1)
  }

  const decrementar = () =>{
    setCount(count - 1)
  }

  return (
    <div>
      <button disabled={count <= initial} onClick={decrementar}>-</button>
      <span>{count}</span>
      <button onClick={incrementar}>+</button>
      <div>
        <Link to={'/terminado'}><button disabled={count == initial} onClick={() => onAdd(count)}>Agregar a tu Compra</button></Link>
      </div>
    </div>
  )
}

export default itemCount