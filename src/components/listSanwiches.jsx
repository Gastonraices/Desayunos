import { Link } from "react-router-dom"

const ListAniversario = ({data}) => {
    
  return (
    <>
        <img src={data.imagen} width="80"/>
        <p>titulo:{data.titulo}</p>
        <p>{data.precio}</p>
        <p>{data.categoria}</p>
        <p><Link to={`/detalle/${data.id}`}>Compar</Link></p>
    </>
  )
}

export default ListAniversario