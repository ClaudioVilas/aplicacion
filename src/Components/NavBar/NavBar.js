import './NavBar.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {

return (
    <div className = "section">

        <NavLink to = '/' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
        <NavLink to = '/productos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Productos </NavLink>
        <NavLink to = '/contactanos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Contactanos </NavLink>

    </div>
        )
}



export default NavBar