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
                <div key={cart.id} className  = "carritodecompra">
                    <img className = "fotocategoria" src = {cart.producto.img} alt = 'logo acciones'/>
                    <p>{cart.producto.nombre}</p>
                    <p>USD {cart.producto.valor}</p>
                    <button className = 'boton'>Finalizar Compra </button>
                </div>
            )
        })}
    </div>
)

}

export default CarritoDeCompra