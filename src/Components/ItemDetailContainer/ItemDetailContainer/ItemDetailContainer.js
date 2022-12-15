import './ItemDetailContainer.css'
import { useEffect, useState } from 'react';
import { getListadoById } from '../../ArrayDeProductos/ArrayDeProductos';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [listado, setListado] = useState ({})

    const {id} = useParams ()

    useEffect (() => {
        getListadoById(id).then (response => {
            setListado (response)})
                .catch(error =>
                     { console.log(error)})
},[id]); 



return(
    <div >
        < ItemDetail producto = {listado} />    
    </div>
    )
}


export default ItemDetailContainer



