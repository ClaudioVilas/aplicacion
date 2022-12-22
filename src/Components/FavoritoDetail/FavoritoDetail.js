import './FavoritoDetail.css'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { FavoritoContext } from '../ContextProvider/FavoritoProvider'
import ContadorClick from '../ContadorClicks/ContadorClicks'
import { CartContext } from '../ContextProvider/CarritoDeCompraProvider'

const Favoritos = () => {

const { favoritos } = useContext (FavoritoContext)
const { addCart, cart } = useContext (CartContext)

return (

    <div>
        {favoritos.map (favorito => {
            return(

                <div className = "favoritodetail">
                    <img className = "fotocategoria" src = {favorito.img} alt = 'logo acciones'/>
                    <p>{favorito.nombre}</p>
                    <p>USD {favorito.valor}</p>
                    <ContadorClick/>
                    <button  onClick = {() => {addCart (cart) } } className = 'boton' > Agregar Al Carrituuuu</button>
                    {/* <button className = 'boton'>Agregar Al Carrito </button> */}
                    <Link className = 'boton' to = '/productos'>Volver</Link>  
                </div>
            )
        })}
    </div>
)

}




export default Favoritos