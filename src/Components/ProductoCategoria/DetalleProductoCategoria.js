import './ProductoCategoria.css'
import { Link } from 'react-router-dom'
import ContenedorProductos from '../ContenedorProductos/ContenedorProductos'

const DetalleProductoCategoria = ({producto}) => {
    return (
              <div className = "productocategoria">
              <img className = "fotocategoria" src = {producto.img} alt = 'logo acciones'/>
              <p>{producto.nombre}</p>
              <p>{producto.tipo}</p>
              <p>USD {producto.valor}</p>
              <p>{producto.desc}</p>
              <button>Comprar</button>
              <Link to = '/contenedorproductos' element = { <ContenedorProductos /> } >Volver</Link>
              </div>
           )
    }




 
export default DetalleProductoCategoria