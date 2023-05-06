import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <div className="navbar" >
            <h1 className='nombreTienda'>LDB Tienda</h1>
            <div className='menuBotones'>
                <button>Inicio</button>
                <button>Nosotros</button>
                <button>Productos</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar;