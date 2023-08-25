import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"


const Layaout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <footer>
    <div class="logo-footer">
        <div class="h1-logo">
            <h1>¡Qué rico!</h1>
        </div>
        <div class="h2-logo">
            <h2>Desayunos que dan caricias al alma.</h2>
        </div>
    </div>

    <div class="informacion">
        <h2>¡Qué rico!</h2>
        <h3>Ayuda</h3>
        <h3>Zonas de entrega</h3>
        <h3>Consultas</h3>
    </div>

    <div class="variedad">
        <h2>Desayunos a domicilio</h2>
        <h3>Aniversarios</h3>
        <h3>Cumpleaños</h3>
        <h3>Enamorados</h3>
        <h3>Infantiles</h3>
    </div>

    <div class="wpp-email">
        <h3>info@quericodesayunos.com</h3>
        <h3>WhatsApp: +54 9 11 ---- ----</h3>
    </div>
</footer>
    </div>
    
  )
}

export default Layaout