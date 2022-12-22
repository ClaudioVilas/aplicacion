import './FavoritoDetail.css'
import { useContext } from "react"
import { FavoritoContext } from '../ContextProvider/FavoritoProvider'
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
                     
                </div>
            )
        })}
    </div>
)

}




export default Favoritos