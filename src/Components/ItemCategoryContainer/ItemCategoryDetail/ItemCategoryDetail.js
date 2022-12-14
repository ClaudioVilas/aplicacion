import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCategoryDetail from '/ItemCategoryContainer/ItemCategory/ItemCategory'


const ItemCategoryDetail = ({tipo}) => {
    return (
        <div>
            <h1 className = 'titulo'>Detalle del producto</h1>
                <div className = "productocategoria">
                    <img className = "fotocategoria" src = {producto.img} alt = 'logo acciones'/>
                    <p>{producto.nombre}</p>
                    <p>{producto.tipo}</p>
                    <p>USD {producto.valor}</p>
                    <p>{producto.desc}</p>
                    <input className = 'input' type = 'number' ></input><button className = 'boton'>Comprar</button>
                    <Link className = 'boton' to = '/tipo' element = { < ItemCategory /> } >Volver</Link>
                </div>
        </div>
           )
    }
 
export default ItemCategoryDetail