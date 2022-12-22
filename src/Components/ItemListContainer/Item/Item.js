import './Item.css'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { FavoritoContext } from '../../ContextProvider/FavoritoProvider';



const Item = ({listados}) => {

  const { addFavorito, removeFavoritos, isInFavoritos } = useContext (FavoritoContext)

    return (
          <div>
            {listados.map (listado => (
            <div className = "contenedorproductos" key = {listado.id}>
              <img className = "foto" src = {listado.img} alt = 'logo empresas'/>
              <p className='mostrar'>{listado.nombre}</p>
              <p className='mostrar'>USD {listado.valor}</p><br></br>
              <button className = 'botoncards'><Link to = {`/listado/${listado.id}`} >Ver Detalle</Link></button>
              <img  onClick = { ()=> { isInFavoritos (listado.id) ? removeFavoritos (listado.id) : addFavorito (listado) } } src = { isInFavoritos(listado.id) ? './imagenes/agregadofavoritos.jpg' : './imagenes/botonfavorito.jpg' } className = 'favorito' />
           </div>
           )) }
          </div>
    )    
}

export default Item