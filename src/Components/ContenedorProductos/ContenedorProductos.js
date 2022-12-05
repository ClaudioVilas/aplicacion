import './ContenedorProductos.css'
import { useEffect, useState } from 'react'
import ListadoProductos from '../ListadoProductos/ListadoProductos'
// import Navbar from '../Navbar/Navbar'

// cuando es un import nombrado es con este formato
import {getListado} from '../ArrayDeProductos/ArrayDeProductos'




const ContenedorProductos = () => {
    const [listado, setListado] = useState ([])

    useEffect (() => {
        getListado().then (response => {
            setListado (response)
                 }).catch(error => { console.log(error)})
},[]); 


// const [show, setshow] = useState (false)

return(
    <div className = "lista">
       {/* <h3 className = "lista2" onClick={() => setshow (!show)}>Menu De Opciones</h3>
      { show ? <Navbar /> : null } */}
        <h1>Listado De Prodcutos</h1>
        <ListadoProductos listados = {listado} />    
    </div>
    )
}


export default ContenedorProductos