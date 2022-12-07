import './NavBar.css'
import Button from 'react-bootstrap/Button';
// import Links from '../Links/Links'
// import {useEffect, useState} from 'react'
// import ContadorClick from '../ContadorClicks/ContadorClicks'
// import ContenedorProductos from '../ContenedorProductos/ContenedorProductos';
// import ProductoCategoria from '../ProductoCategoria/ProductoCategoria';
// import Home from '../Home/Home'
import { NavLink } from 'react-router-dom'


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

        <NavLink to = '/' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
        <NavLink to = '/ItemListContainer' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Productos </NavLink>
        <NavLink to = '/productoscategoria' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Producto Categoria </NavLink>
        <NavLink to = '/contactanos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Contactanos </NavLink>

    </div>
        )
}



export default NavBar