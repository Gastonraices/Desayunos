import { createContext, useContext, useState } from 'react'


export const useCartContext = () => useContext(AppContex)

const Provider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const clear = () => setCarrito([])
    const isInCart = (id) => carrito.find(producto => producto.id ===id) ? true : false 

    const removeProduct = (id) => setCarrito(carrito.filter((prod) => prod.id !== id ))

    const precioTotal = () => carrito.reduce((prev, act) => prev + act.quantity * act.precio, 0)
    
    const productoTotal = () => carrito.reduce((acu, prodAct) => acu + prodAct.quantity, 0)

    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
         setCarrito(carrito.map(producto => {
           return producto.id === item.id ? {...producto, quantity : producto.quantity + quantity} : producto
         }))
        }else{
         setCarrito([...carrito, {...item, quantity}])
        }
      }

      console.log(carrito)
  return (
    <AppContex.Provider value={{clear, addItem, productoTotal, precioTotal, isInCart, removeProduct, carrito}}>
        {children}
    </AppContex.Provider>
  )
}

const AppContex = createContext()

export default Provider