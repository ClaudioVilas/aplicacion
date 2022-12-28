import './ItemDetail.css'
import ContadorClick from '../../ContadorClicks/ContadorClicks'
import { useContext } from 'react'
import { FavoritoContext } from '../../ContextProvider/FavoritoProvider'
import { CartContext } from '../../ContextProvider/CarritoDeCompraProvider'


const ItemDetail = ({producto, id, nombre }) => {

    const { addCart } = useContext (CartContext)

    const { addFavorito, removeFavoritos, isInFavoritos } = useContext (FavoritoContext)

    const handleOnAdd = ( quantity ) => {
        console.log ('Se agrego al carrito' +  quantity)

        addCart ({producto, quantity})
    }


    return (
        <div>
            <h1 className = 'titulo'>Detalle del producto</h1>
                <div className = "productocategoria">
                    <img  onClick = { ()=> { isInFavoritos (producto.id) ? removeFavoritos (producto.id) : addFavorito (producto) } } src = { isInFavoritos(producto.id) ? '/imagenes/agregadofavoritos.jpg' : '/imagenes/botonfavorito.jpg' } className = 'favoritoitemdetail' alt = 'imagenfavorito'/>
                    <img className = "fotocategoria" src = {producto.img} alt = 'logo acciones'/>
                    <p>{producto.nombre}</p>
                    <p>{producto.tipo}</p>
                    <p>USD {producto.valor}</p>
                    <p>{producto.desc}</p>
                    <ContadorClick onAdd = {handleOnAdd} />
                </div>
        </div>
           )
    }
 
export default ItemDetail