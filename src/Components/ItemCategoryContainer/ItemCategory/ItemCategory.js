import './ItemCount.css'
import { useEffect, useState } from 'react';
import { getListadoByTipo } from '../../ArrayDeProductos/ArrayDeProductos';
import { useParams } from 'react-router-dom';
import ItemCategoryDetail from '../ItemCategoryDetail/ItemCategoryDetail';


const ItemCategory = () => {
    const [listado, setListado] = useState ({})

    const {tipo} = useParams ()

    useEffect (() => {
        getListadoByTipo(tipo).then (response => {
            setListado (response)})
                .catch(error =>
                     { console.log(error)})
},[tipo]); 



return(
    <div >
        < ItemCategoryDetail producto = {listado} />    
    </div>
    )
}


export default ItemCount