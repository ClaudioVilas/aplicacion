import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ContadorClick from '../../ContadorClicks/ContadorClicks'
import { useContext } from 'react'
import { FavoritoContext } from '../../ContextProvider/ContextProvider'


const ItemDetail = ({producto, listado}) => {

    const { addFavorito } = useContext (FavoritoContext)

    return (
        <div>
            <h1 className = 'titulo'>Detalle del producto</h1>
                <div className = "productocategoria">
                    <img  onClick = { ()=> { addFavorito (listado) } } src = {'./imagenes/botonfavorito.jpg'} className = 'favoritoitemdetail' />
                    <img className = "fotocategoria" src = {producto.img} alt = 'logo acciones'/>
                    <p>{producto.nombre}</p>
                    <p>{producto.tipo}</p>
                    <p>USD {producto.valor}</p>
                    <p>{producto.desc}</p>
                    <ContadorClick/>
                    <button className = 'boton'>Agregar Al Carrito</button>
                    <Link className = 'boton' to = '/productos' >Volver</Link>
                </div>
        </div>
           )
    }
 
export default ItemDetail