import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Lista from './Lista'


const NavBar = () => {

    const [show, setshow] = useState (false)

return (
    <div className = "section">
        <NavLink to = '/' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
        <NavLink to = '/contactanos' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Contactanos </NavLink>
        <NavLink to = '/productos' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} onClick={() => setshow (!show)} > Productos </NavLink>
        { show ? <Lista /> : null }
    </div>
        )
}



export default NavBar