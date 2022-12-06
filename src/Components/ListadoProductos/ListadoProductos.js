import './ListadoProductos.css'
// import { useState } from "react"
import { Link } from 'react-router-dom'


const ListadoProductos = ({listados}) => {

  // const [count, setCount] = useState (0)

  // const increment = () => {
  //     setCount (count +1)
  //     }


    return (
        <div>
            {listados.map (listado => (
            <div className = "contenedorproductos" key = {listado.id}>
              <img className = "foto" src = {listado.img} alt = 'logo empresas'/>
              <p>{listado.nombre}</p>
              {/* <p>{listado.tipo}</p> */}
              <p>USD {listado.valor}</p>
              {/* <p>{listado.desc}</p> */}
              <Link to = {`listado/${listado.id}`} >Ver Detalle</Link>
            </div>
           )) }
           </div>
    )    
}

export default ListadoProductos