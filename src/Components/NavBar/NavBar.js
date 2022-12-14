import './NavBar.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {

return (
    <div className = "section">

        <NavLink to = '/' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
        <NavLink to = '/contactanos' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Contactanos </NavLink>
        <NavLink to = '/productos' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Productos    </NavLink>
        <ul>
           <div><NavLink to = '/' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Automotor </NavLink></div> 
           <div> <NavLink to = '/' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Tecnologia </NavLink></div> 
           <div><NavLink to = '/' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Petrolera </NavLink></div> 
        </ul>
    </div>
        )
}



export default NavBar