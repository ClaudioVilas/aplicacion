import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    return (
        <div>
            <h1>Detalle del producto</h1>
                <div className = "productocategoria">
                    <img className = "fotocategoria" src = {producto.img} alt = 'logo acciones'/>
                    <p>{producto.nombre}</p>
                    <p>{producto.tipo}</p>
                    <p>USD {producto.valor}</p>
                    <p>{producto.desc}</p>
                    <input type = 'number' className = 'input'></input><button className = 'boton'>Comprar</button>
                    <Link className = 'boton' to = '/productos' element = { < ItemCount /> } >Volver</Link>
                </div>
        </div>
           )
    }
 
export default ItemDetail