import './Item.css'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { FavoritoContext } from '../../../App';



const Item = ({listados}) => {
  const { favorito, setFavoritos} = useContext (FavoritoContext)
    return (
          <div>
            {listados.map (listado => (
            <div className = "contenedorproductos" key = {listado.id}>
              <img className = "foto" src = {listado.img} alt = 'logo empresas'/>
              <p className='mostrar'>{listado.nombre}</p>
              <p className='mostrar'>USD {listado.valor}</p><br></br>
              <button className = 'botoncards'><Link to = {`/listado/${listado.id}`} >Ver Detalle</Link></button>
              <img  onClick = { ()=> { setFavoritos ([...favorito, listado.id]) } } src = {'./imagenes/botonfavorito.jpg'} className = 'favorito'></img>
            </div>
           )) }
          </div>
    )    
}

export default Item