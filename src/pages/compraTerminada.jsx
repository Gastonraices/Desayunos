import { Link } from "react-router-dom"


const CompraTerminada = () => {
  return (
    <div>
        <p>Gracias por su Compra</p>
        <div>
        <Link to={'/cart'}><button>Ir a su Carrito</button></Link>
        <Link to={'/'}><button>Seguir Navegando</button></Link>
        </div>
    </div>
  )
}

export default CompraTerminada