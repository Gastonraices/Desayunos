

const ItemDetail = ({data}) => {
  return (
    <div>
        <img src={data.imagen} width="80"/>
        <p>titulo:{data.titulo}</p>
        <p>{data.precio}</p>
        <p>{data.categoria}</p>
    </div>
  )
}

export default ItemDetail 
