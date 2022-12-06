import DetalleProductoCategoria from './DetalleProductoCategoria';
import { useEffect, useState } from 'react';
import { getListadoById } from '../ArrayDeProductos/ArrayDeProductos';
import { useParams } from 'react-router-dom';

const ProductoCategoria = () => {
    const [listado, setListado] = useState ({})

    const params = useParams ()

    useEffect (() => {
        getListadoById(params.listado.Id).then (response => {
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



