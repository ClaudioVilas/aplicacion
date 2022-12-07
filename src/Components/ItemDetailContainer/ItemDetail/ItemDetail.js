import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    return (
              <div className = "productocategoria">
              <img className = "fotocategoria" src = {producto.img} alt = 'logo acciones'/>
              <p>{producto.nombre}</p>
              <p>{producto.tipo}</p>
              <p>USD {producto.valor}</p>
              <p>{producto.desc}</p>
              <button>Comprar</button>
              <Link to = '/contenedorproductos' element = { < ItemCount /> } >Volver</Link>
              </div>
           )
    }
 
export default ItemDetail