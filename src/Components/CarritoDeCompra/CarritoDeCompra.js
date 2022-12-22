import './CarritoDeCompra.css'
import { useContext } from "react"
import { CartContext } from '../ContextProvider/CarritoDeCompraProvider'


const CarritoDeCompra = () => {

const { cart } = useContext (CartContext)

return (

    <div>
        <h1>Bienvenidos al carituuuuu</h1>
        {cart.map (cart => {
            return(
                <div className = "carritodecompra">
                    <img className = "fotocategoria" src = {cart.img} alt = 'logo acciones'/>
                    <p>{cart.nombre}</p>
                    <p>USD {cart.valor}</p>
                    <button className = 'boton'>Finalizar Compra </button>
                </div>
            )
        })}
    </div>
)

}

export default CarritoDeCompra