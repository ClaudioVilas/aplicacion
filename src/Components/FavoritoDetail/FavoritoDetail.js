import './FavoritoDetail.css'
import { useContext } from "react"
import { FavoritoContext } from "../../App"
import { Link } from "react-router-dom"

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
                    <button className = 'botoncards'><Link to = {`/listado/${favorito.id}`} >Ver Detalle</Link></button>
    
                </div>
            )
        })}
    </div>
)

}




export default Favoritos