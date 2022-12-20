import './ItemList.css'
import { useEffect, useState } from 'react'
import Item from '../Item/Item'


// import Navbar from '../Navbar/Navbar'

// cuando es un import nombrado es con este formato
import {getListado, getListadoByTipo} from '../../ArrayDeProductos/ArrayDeProductos'
import { useParams } from 'react-router-dom'
// import { Form } from 'react-router-dom'




const ItemList = () => {
    const [listado, setListado] = useState ([])
    const {tipo} = useParams ()
    

    useEffect (() => {
        if (!tipo) {
            getListado().then (response => {
                setListado (response)
                     }).catch(error => { console.log(error)})           
        } else {
            getListadoByTipo(tipo).then (response => {
                setListado (response)
                     }).catch(error => { console.log(error)})  
        }
},[tipo]); 


// const [show, setshow] = useState (false)

return(
    <div className = "lista">
       {/* <h3 className = "lista2" onClick={() => setshow (!show)}>Menu De Opciones</h3>
      { show ? <Navbar /> : null } */}
        <h1>Listado De Prodcutos</h1>
        <Item listados = {listado} />  
    </div>
    )
}


export default ItemList