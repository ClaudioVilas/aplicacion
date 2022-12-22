import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ContadorClick from '../../ContadorClicks/ContadorClicks'
import { useContext } from 'react'
import { FavoritoContext } from '../../ContextProvider/FavoritoProvider'
import { CartContext } from '../../ContextProvider/CarritoDeCompraProvider'


const ItemDetail = ({producto}) => {

    const { addFavorito, removeFavoritos, isInFavoritos } = useContext (FavoritoContext)
    const { cart, addCart } = useContext (CartContext)

    return (
        <div>
            <h1 className = 'titulo'>Detalle del producto</h1>
                <div className = "productocategoria">
                    <img  onClick = { ()=> { isInFavoritos (producto.id) ? removeFavoritos (producto.id) : addFavorito (producto) } } src = { isInFavoritos(producto.id) ? '/imagenes/agregadofavoritos.jpg' : '/imagenes/botonfavorito.jpg' } className = 'favoritoitemdetail' />
                    <img className = "fotocategoria" src = {producto.img} alt = 'logo acciones'/>
                    <p>{producto.nombre}</p>
                    <p>{producto.tipo}</p>
                    <p>USD {producto.valor}</p>
                    <p>{producto.desc}</p>
                    <ContadorClick/>
                    <button  onClick = {() => {addCart (cart) } } className = 'boton' > Agregar Al Carrituuuu</button>
                    <Link className = 'boton' to = '/productos' >Volver</Link>
                </div>
        </div>
           )
    }
 
export default ItemDetail