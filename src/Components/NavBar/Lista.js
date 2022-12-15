import { NavLink } from 'react-router-dom'

const Lista = () => {
    
    return (
        <ul>
           <div><NavLink to = '/categoria/SoftWare' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > SoftWare </NavLink></div> 
           <div><NavLink to = '/categoria/Tecnologica' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Tecnologia </NavLink></div> 
           <div><NavLink to = '/categoria/Vta On-Line' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Vta On-Line </NavLink></div> 
           <div><NavLink to = '/categoria/Automotriz' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Automotriz </NavLink></div> 
           <div><NavLink to = '/categoria/Electrodomesticos' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Electrodomesticos </NavLink></div> 
           <div><NavLink to = '/categoria/Red Social' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Red Social </NavLink></div> 
        </ul>

    )
}

export default Lista