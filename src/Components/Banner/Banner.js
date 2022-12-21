import './Banner.css'
import { useContext } from 'react'
import { FavoritoContext } from '../../App'
import { Link } from 'react-router-dom'


const Banner = (props) => {

    const { favoritos } = useContext (FavoritoContext)

    return (
        <div className = "cabeceras">
            <h1 className = "cabecerah1">{props.greeting}</h1>
            <img className = "botoncarrito" src = {'./imagenes/logocarrtio.jpg'} alt = 'imagen-carrito'/>
            <Link to = '/favoritos' > <img className = 'botonfavo' src = {'./imagenes/botonfavorito.jpg'} /> </Link>
            <p className='numerofavoritos' >{favoritos.length}</p>
        </div>
        )
}

export default Banner