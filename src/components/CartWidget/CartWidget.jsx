import carrito from './assets/img/carrito.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext)
    return (
        (cartTotal() > 0) ? 
        <Link to={ "/cart" } className='btn position-relative'>
            <img src={ carrito } alt="carrito" className='carritoImg' width={ 32 } />
            <span className="position-absolute top-0 start-50 translate-bottom badge rounded-pill bg-danger">{cartTotal() }</span>
        </Link> : ""
    )
}

export default CartWidget;