import './Banner.css'
import FavoritoDetail from '../FavoritoDetail/FavoritoDetail'


const Banner = (props) => {
    return (
        <div className = "cabeceras">
            <h1 className = "cabecerah1">{props.greeting}</h1>
            <img className = "botoncarrito" src = {'./imagenes/logocarrtio.jpg'} alt = 'imagen-carrito'/>
            <FavoritoDetail />
        </div>
        )
}

export default Banner