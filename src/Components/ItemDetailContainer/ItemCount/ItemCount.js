import './ItemCount.css'
import { useEffect, useState } from 'react';
import { getListadoById } from '../../ArrayDeProductos/ArrayDeProductos';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemCount = () => {
    const [listado, setListado] = useState ({})

    const params = useParams ()

    useEffect (() => {
        getListadoById(params.listado.Id).then (response => {
            setListado (response)
                 }).catch(error => { console.log(error)})
},[]); 



return(
    <div >
        < ItemDetail producto = {listado} />    
    </div>
    )
}


export default ItemCount



