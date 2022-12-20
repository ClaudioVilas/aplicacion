import './FavoritoDetail.css'
import { useContext } from 'react'
import { FavoritoContext } from '../../App'

const FavoritoDetail = () => {

const { favoritos } = useContext (FavoritoContext)

    return (
        <div>
            <img  src = {'./imagenes/botonfavorito.jpg'} className = 'botonfavorito'></img>
            <p className='numerofavoritos'>{favoritos.length}</p>
        </div>
    )
}

export default FavoritoDetail