import './ItemCount.css'
import { useEffect, useState } from 'react';
import { getListadoById, getListadoByTipo } from '../../ArrayDeProductos/ArrayDeProductos';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemCount = () => {
    const [listado, setListado] = useState ({})

    const {id} = useParams ()
    const {tipo} = useParams ()

    useEffect (() => {
        if (!tipo){
        getListadoById(id).then (response => {
            setListado (response)})
                .catch(error =>
                     { console.log(error)})
        } else {
            getListadoByTipo(tipo).then (response => {
                setListado (response)})
                    .catch(error =>
                         { console.log(error)})
        }                  
                     
},[tipo]); 



return(
    <div >
        < ItemDetail producto = {listado} />    
    </div>
    )
}


export default ItemCount



