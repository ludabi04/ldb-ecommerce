import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar" >
            <h1 className='nombreTienda'>LDB Tienda</h1>
            <div className='menuBotones'>
                <button>Inicio</button>
                <button>Nosotros</button>
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={"/category/Jean"}>Jean</NavLink>
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={"/category/Pantalon"}>Pantalon</NavLink>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar;