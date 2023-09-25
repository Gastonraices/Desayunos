import { useEffect, useState } from "react"
import ListAniversario from "../components/listSanwiches"
import { promesa } from "../app/api"
import { useParams } from "react-router-dom"


const Sanwiches = () => {
    const [sanwichAniversario, setSanwichAniversario] = useState([])
    const {categoriaId} = useParams()
    
    useEffect(() =>{
      promesa().then(res => {
        if(categoriaId){
          const prodFilter = res.filter(prod => prod.categoria === categoriaId)
          setSanwichAniversario(prodFilter)
        }
        else{
          setSanwichAniversario(res)
        } 
      })
    },[categoriaId])
    
    

    return (
      <>
        {
          sanwichAniversario.map((data, id) =>(
            <ListAniversario data={data} key={id}/>
        ))
        }
        
      </>
      
    )
}

export default Sanwiches