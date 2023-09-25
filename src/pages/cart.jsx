import { Link } from "react-router-dom"
import { useCartContext } from "../contex/Provider"
import ItemCart from "../components/itemCart"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import { useState } from "react";


const Cart = () => {

    const {carrito, precioTotal,productoTotal } = useCartContext()

    if(carrito.length === 0){
        return(
            <>
                <p>no hay sanwiches en tu canasta KPOooo</p>
                <Link to={"/"}>Si queres comprar, pinchame o largate de aqui. PD: Gaston se la kome :D</Link>
            </>
        )
    }

    const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("TEST-a525679c-6411-44a9-9a7e-fd7758f3ad40");

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8080/create_preference", {
        description: "Total a Pagar",
        price: `${precioTotal()}`,
        quantity: `${productoTotal()}`,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };
    
  return (
    <>
      {
        carrito.map((item, id) => (
          <ItemCart item={item} key={id} />
        ))
      }
      <p>Precio Total: {precioTotal()}</p>
      <p>Productos Totales: {productoTotal()}</p>
      <button onClick={handleBuy}>Buy</button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </>
  )
}

export default Cart