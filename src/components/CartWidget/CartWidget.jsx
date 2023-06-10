import { Link } from 'react-router-dom';
import carrito from '../img/cart.svg'

const CartWidget = () => {

    return (
        <div className='contadorCarrito'>
            <div>0</div>
            <Link to="/cart" ><img src={ carrito } alt="carrito" className='carritoImg' /></Link>
        </div>
    )
}

export default CartWidget;