import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ContadorClick from '../../ContadorClicks/ContadorClicks'

const ItemDetail = ({producto}) => {
    return (
        <div>
            <h1 className = 'titulo'>Detalle del producto</h1>
                <div className = "productocategoria">
                    <img className = "fotocategoria" src = {producto.img} alt = 'logo acciones'/>
                    <p>{producto.nombre}</p>
                    <p>{producto.tipo}</p>
                    <p>USD {producto.valor}</p>
                    <p>{producto.desc}</p>
                    <ContadorClick/>
                    <button className = 'boton'>Comprar</button>
                    <Link className = 'boton' to = '/productos' element = { < ItemDetail /> } >Volver</Link>
                </div>
        </div>
           )
    }
 
export default ItemDetail