import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import Logo from './Assets/Img/LogoLDB.svg'

const NavBar = () => {
    return (
        <div className="container-fluid bg-light sticky-top navbar bg-body-secondary p-0 " >
            <div className="col-12">
                <div className="row align-items-center">
                <div className="col">
                    <NavLink to={ "/" }><img src={ Logo } alt="" width={42} /></NavLink>
                </div>
                    <div className="col fs-5 ">
                    <NavLink className="nav-link itemNav " activeclassname="text-danger" to={ "/nosotros" }>Nosotros</NavLink>
                </div>
                <div className="col fs-5">
                    <NavLink className="nav-link itemNav" activeclassname="text-danger" to={ "/category/Jean" }>Jean</NavLink>
                </div>
                <div className="col fs-5">
                    <NavLink className="nav-link itemNav" activeclassname="text-danger" to={ "/category/Remera" }>Remera</NavLink>
                </div>
                <div className="col fs-5">
                    <NavLink className="nav-link itemNav" activeclassname="text-danger" to={ "/contacto" }>Contacto</NavLink>
                </div>
                <div className="col fs-5">
                    <CartWidget />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;