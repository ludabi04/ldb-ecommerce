import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import Logo from './Assets/Img/LogoLDB.png'

const NavBar = () => {
    return (
        <div className="navbar" >
                <NavLink to={"/"}><img src={ Logo } alt="" className='nombreTienda' /></NavLink> 
                <div className='menuBotones'>
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={ "/nosotros" }>Nosotros</NavLink>
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={"/category/Jean"}>Jean</NavLink>
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={"/category/Remera"}>Remera</NavLink>
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={"/contacto"}>Contacto</NavLink>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar;