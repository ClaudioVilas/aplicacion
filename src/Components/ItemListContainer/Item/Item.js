import './Item.css'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { FavoritoContext } from '../../ContextProvider/ContextProvider';



const Item = ({listados}) => {

  const { addFavorito, removeFavoritos, isInFavoritos } = useContext (FavoritoContext)
  // const isAdded = isInFavoritos (favoritos.id)

    return (
          <div>
            {listados.map (listado => (
            <div className = "contenedorproductos" key = {listado.id}>
              <img className = "foto" src = {listado.img} alt = 'logo empresas'/>
              <p className='mostrar'>{listado.nombre}</p>
              <p className='mostrar'>USD {listado.valor}</p><br></br>
              <button className = 'botoncards'><Link to = {`/listado/${listado.id}`} >Ver Detalle</Link></button>
              <img  onClick = { ()=> { addFavorito (listado) } } src = {'./imagenes/botonfavorito.jpg'} className = 'favorito' ></img>
            </div>
           )) }
          </div>
    )    
}

export default Item