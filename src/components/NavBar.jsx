import { Link } from "react-router-dom";


const NavBar= () => {


  return (
    <div>


      <div className="logo">
          <div className="h1-logo">
              <Link to='/' className="h1-logo-Link"><h1 className="h1-logo-h1">¡Qué rico!</h1></Link>
          </div>
          <div className="h2-logo">
              <h2>Desayunos que dan caricias al alma.</h2>
          </div>
      </div>

      <div className="menu">
        <Link to='categoria/aniversario' className="menu-Link"><h2>Aniversarios</h2></Link>
        <Link to='categoria/cumpleaños' className="menu-Link"><h2>Cumpleaños</h2></Link>
        <Link to='categoria/enamorados' className="menu-Link"><h2>Enamorados</h2></Link>
        <Link to='categoria/infantiles' className="menu-Link"><h2>Infantiles</h2></Link>
        <Link to='/' className="menu-Link"><h2>Tu Desayuno</h2></Link>
    </div>

    </div>
  )
}


export default NavBar

