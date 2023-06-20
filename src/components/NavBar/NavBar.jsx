import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import Logo from './Assets/Img/LogoLDB.svg'

const NavBar = () => {
    return (
        <div class="container-fluid bg-light sticky-top navbar bg-body-secondary p-0 " >
            <div className="col-12">
                <div class="row align-items-center">
                <div class="col">
                    <NavLink to={ "/" }><img src={ Logo } alt="" width={42} /></NavLink>
                </div>
                    <div class="col fs-5 ">
                    <NavLink className="nav-link itemNav " activeclassname="text-danger" to={ "/nosotros" }>Nosotros</NavLink>
                </div>
                <div class="col fs-5">
                    <NavLink className="nav-link itemNav" activeclassname="text-danger" to={ "/category/Jean" }>Jean</NavLink>
                </div>
                <div class="col fs-5">
                    <NavLink className="nav-link itemNav" activeclassname="text-danger" to={ "/category/Remera" }>Remera</NavLink>
                </div>
                <div class="col fs-5">
                    <NavLink className="nav-link itemNav" activeclassname="text-danger" to={ "/contacto" }>Contacto</NavLink>
                </div>
                <div class="col fs-5">
                    <CartWidget />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;