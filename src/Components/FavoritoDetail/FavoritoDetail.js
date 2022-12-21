import './FavoritoDetail.css'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { FavoritoContext } from '../ContextProvider/ContextProvider'
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail'
import ContadorClick from '../ContadorClicks/ContadorClicks'

const Favoritos = () => {

const { favoritos } = useContext (FavoritoContext)

return (

    <div>
        {favoritos.map (favorito => {
            return(

                <div className = "favoritodetail">
                    <img className = "fotocategoria" src = {favorito.img} alt = 'logo acciones'/>
                    <p>{favorito.nombre}</p>
                    <p>USD {favorito.valor}</p>
                    <ContadorClick/>
                    <button className = 'boton'>Agregar Al Carrito</button>
                    <Link className = 'boton' to = '/productos'>Volver</Link>  
                </div>
            )
        })}
    </div>
)

}




export default Favoritos