import DetalleProductoCategoria from './DetalleProductoCategoria'
import { useEffect, useState } from 'react';
import { getListadoById } from '../ArrayDeProductos/ArrayDeProductos';

const ProductoCategoria = () => {
    const [listado, setListado] = useState ({})

    useEffect (() => {
        getListadoById(4).then (response => {
            setListado (response)
                 }).catch(error => { console.log(error)})
},[]); 



return(
    <div >
        <DetalleProductoCategoria producto = {listado} />    
    </div>
    )
}


export default ProductoCategoria



