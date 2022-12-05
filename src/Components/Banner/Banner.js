import './Banner.css'

const Banner = (props) => {
    return (
        <div className = "cabecera">
            <h1 className = "cabecerah1">{props.greeting}</h1>
            <img className = "botoncarrito" src = {'./imagenes/logocarrtio.jpg'} alt = 'imagen-carrito'/>
        </div>
        )
}

export default Banner