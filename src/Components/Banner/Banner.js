import './Banner.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavoritoContext } from '../ContextProvider/FavoritoProvider'
import { CartContext } from '../ContextProvider/CarritoDeCompraProvider'

const Banner = (props) => {

    const { favoritos } = useContext (FavoritoContext)
    const { cart } = useContext (CartContext)

    return (
        <div className = "cabeceras">
            <h1 className = "cabecerah1">{props.greeting}</h1>
            <Link to = '/CarritoDeCompra' > <img className = "botoncarrito" src = {'/imagenes/logocarrtio.jpg'} alt = 'imagen-carrito'/> </Link>
            <p className='numerofavoritos' > {cart.length} </p>
            <Link to = '/favoritos' > <img className = 'botonfavo' src = {'/imagenes/botonfavorito.jpg'} /> </Link>
            <p className='numerofavoritos' > {favoritos.length} </p>
        </div>
        )
}

export default Banner