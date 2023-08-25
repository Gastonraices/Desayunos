import Aniversario from '../../public/aniversario.jpg'
import Cumpleaños from '../../public/cumpleaños.jpg'
import Enamorados from '../../public/enamorados.jpg'
import Infantiles from '../../public/infantiles.jpg'

export const promesa = () =>{
    const list = new Promise((resolve) =>{
        setTimeout(() =>{
            resolve ([
                {
                    imagen:Aniversario,
                    id:1,
                    titulo: "multisanwiches",
                    precio: 140000,
                    categoria:"aniversario"
                },
                {
                    imagen:Cumpleaños,
                    id:2,
                    titulo: "multicumpleaños",
                    precio: 130000,
                    categoria:"cumpleaños"
                },
                {
                    imagen:Enamorados,
                    id:3,
                    titulo: "multienamorados",
                    precio: 130000,
                    categoria:"enamorados"
                },
                {
                    imagen:Infantiles,
                    id:4,
                    titulo: "multiinfantiles",
                    precio: 130000,
                    categoria:"infantiles"
                }
            ])
        })
    })
    return list 
}