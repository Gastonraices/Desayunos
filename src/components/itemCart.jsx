import { useCartContext } from '../contex/Provider'


const ItemCart = ({item}) => {

  
    const {removeProduct} = useCartContext()

  return (
    <div>
        <img src={item.imagen} width="80"/>
        <p>Titulotitulo: {item.titulo}</p>
        <p>Precio: {item.quantity * item.precio}</p>
        <p>Categoria: {item.categoria}</p>
        <p>Cantitudad: {item.quantity}</p>
        <>
            <button onClick={() => removeProduct(item.id)}>Eliminar</button>  
        </>

        
    </div>
  )
}

export default ItemCart