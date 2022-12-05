import './NavBar.css'
// import Links from '../Links/Links'
// import {useEffect, useState} from 'react'
// import ContadorClick from '../ContadorClicks/ContadorClicks'
import ContenedorProductos from '../ContenedorProductos/ContenedorProductos';
import ProductoCategoria from '../ProductoCategoria/ProductoCategoria';
import Home from '../Home/Home'
import {BrowserRouter} from 'react-router-dom'


const NavBar = () => {

// useEffect (() => {
//     return () => console.log ('mostrar')}, [])

// const clickEnHome = () => {
//     alert ('Hiciste click en home')
// }

// const clickEnNosotros = () => {
//     alert ('Hiciste click en nosotros')
// }

// const clickEnTienda = () => {
//     alert ('hiciste click en tienda')
// }


// const [show, setshow] = useState (false)

// return (
//     <nav>
//         <section className = "section">
//             <Links func = {clickEnHome}><h5>Home</h5></Links>
//             <Links func = {clickEnNosotros}><h5>Nosotros</h5></Links>
//             <Links func = {clickEnTienda}><h5>Tienda</h5></Links>
//             <div onClick={() => setshow (!show)}>Contador</div>
//             { show ? <ContadorClick initial={0}/> : null }
//         </section>
//     </nav>
//         )
// }



return (
    <div className = "section">
        <button>Home</button>
        <button>Listado Productos</button>
        <button>Categoria Productos</button>

    </div>
        )
}



export default NavBar